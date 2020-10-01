const logger = require('../logger')();
const {
    VCAP_SERVICES, DB2_SCHEMAS
} = process.env;

const envVarsAreValid = () => {
    const errors = [];

    if (!VCAP_SERVICES) {
        errors.push('VCAP Services (VCAP_SERVICES) are not defined.');
    }

    if (!DB2_SCHEMAS) {
        errors.push('Schema names (DB2_SCHEMAS) are not defined.');
    }

    if (errors.length) {
        logger.error(errors.join('\n'));
        process.exit(1);
    }

    return errors.length === 0;
};

module.exports = () => {
    let config = null;

    if (envVarsAreValid()) {
        try {
            const vcap = JSON.parse(VCAP_SERVICES);

            config = {
                schemaNames: DB2_SCHEMAS,
                db2: vcap['dashDB For Transactions'][0].credentials
            };
        } catch (error) {
            logger.error(error);
            process.exit(1);
        }
    }
    return config;
};