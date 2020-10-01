const { Pool } = require('ibm_db');
const logger = require('../logger')();
let pool = null;
let connectionString = null;

function openConnection () {
    return new Promise((resolve, reject) => {
        pool.open(connectionString, (error, conn) => {
            if (error) {
                logger.error('Error opening database connection: ', error);
                reject(error);
            } else {
                resolve(conn);
            }
        });
    });
}

function createConnectionWrapper (connection) {
    let onTransaction = false;

    if (!connection.odbc || !connection.connected) {
        throw new Error('Invalid connection obj given to Wrapper: ', connection);
    }

    return {
        /**
         *
         */
        prepare: (queryBase) => {
            const preparer = (params) => {
                const promise = new Promise((resolve, reject) => {
                    // prepare statement
                    connection.prepare(queryBase, (prepareError, statement) => {
                        if (prepareError) {
                            reject(prepareError);
                        } else {
                            // execute
                            statement.execute(params, (statementError, result) => (
                                statementError ? reject(statementError) : resolve(result)
                            ));
                        }
                    });
                });
                return promise;
            };

            return preparer;
        },
        /**
         *
         */
        query: (queryString) => {
            const promise = new Promise((resolve, reject) => {
                logger.info('Querying: \n', queryString);
                connection.query(queryString, (error, rows) => {
                    if (error) {
                        logger.error('Error running query: ', queryString, '\n', error);
                        reject(error);
                    } else {
                        resolve(rows);
                    }
                });
            });
            return promise;
        },
        /**
         *
         */
        querySync: (queryString) => {
            let result = null;

            try {
                result = connection.querySync(queryString);
            } catch (error) {
                logger.error('Error running query: ', queryString, error);
                throw new Error(error);
            }

            return result;
        },
        /**
         *
         */
        beginTransaction: (payload) => {
            if (onTransaction) Promise.reject(new Error('Transaction already started'));

            const promise = new Promise((resolve, reject) => {
                connection.beginTransaction((error) => {
                    if (error) {
                        logger.info('Error starting transaction: ', error);
                        reject(error);
                    } else {
                        onTransaction = true;
                        resolve(payload);
                    }
                });
            });

            return promise;
        },
        /**
         *
         */
        commitTransaction: (payload) => {
            if (!onTransaction) Promise.reject(new Error('Commiting transaction: Transaction not started'));

            const promise = new Promise((resolve, reject) => {
                connection.commitTransaction((error) => {
                    if (error) {
                        logger.info('Error commiting transaction: ', error);
                        reject(error);
                    } else {
                        logger.info('Payload: ', payload);
                        resolve(payload);
                    }
                });
            });

            return promise;
        },
        /**
         *
         */
        rollbackTransaction: () => {
            if (!onTransaction) throw new Error('Rollback transaction: Transaction not started');
            let rolled = true;

            try {
                connection.rollbackTransactionSync();
                onTransaction = false;
            } catch (error) {
                logger.info('Error on transaction rollback: ', error);
                rolled = false;
            }

            return rolled;
        },
        /**
         *
         */
        close: () => connection.close(() => {})
    };
}


module.exports = (config) => {
    if (!config || !config.db || !config.hostname || !config.port || !config.username || !config.password) {
        throw new Error('Error on database init: missing config data');
    }

    const poolSize = { initial: 1, max: 50 };
    connectionString = `DATABASE=${config.db};HOSTNAME=${config.hostname};PORT=${config.port};UID=${config.username};PWD=${config.password}`;

    // instanciation and initial configs
    pool = new Pool();
    pool.setMaxPoolSize(poolSize.max);
    const ret = pool.init(poolSize.initial, connectionString);

    if (!ret) {
        logger.info('Error database pool init');
        return false;
    }

    return {
        getConnection: () => {
            const promise = new Promise((resolve, reject) => {
                openConnection()
                    .then(connection => resolve(createConnectionWrapper(connection)))
                    .catch(reject);
            });

            return promise;
        }
    };
};