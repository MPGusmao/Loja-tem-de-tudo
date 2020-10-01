const database = require('./db2.js');
const interceptor = require('express-interceptor');

module.exports = (config) => {
    const generator = database(config);

    return {
        /**
         *
         */
        open: async (req, res, next) => {
            try {
                req.dbConnection = await generator.getConnection();
                next();
            } catch (error) {
                res.status(500).json({ error: 'Database error', e: error });
            }
        },
        /**
         *
         */
        close: interceptor((req) => {
            const intercept = {
                // Evaluates if the response should be intercepted
                isInterceptable: () => req.originalUrl.indexOf('/api') > -1,
                // interceptor callback
                intercept: (body, send) => {
                    send(body);
                    if (req.dbConnection) {
                        req.dbConnection.close();
                    }
                }
            };

            return intercept;
        })
    };
};