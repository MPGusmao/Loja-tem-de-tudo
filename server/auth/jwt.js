const jwt = require('jsonwebtoken'); // eslint-disable-line consistent-return
const responses = require('./auth.responses.json');
const tokenExpireTime = '13h';
const logger = require('../logger')();

module.exports = (config) => {
    const secret = config.jwtSecret;

    return {
        sign (payload) {
            return jwt.sign(payload, secret, { expiresIn: tokenExpireTime });
        },
        validate (req, res, next) {
            try {
                const { token } = req.signedCookies;
                const decoded = token ? jwt.verify(token, secret) : false;

                if (decoded) {
                    req.user = decoded;
                    next();
                } else {
                    const response = {
                        error: { name: 'TokenInexistentError' },
                        ...responses.NOT_LOGGEDIN.error
                    };

                    res.status(response.status).json(response);
                }
            } catch (error) {
                let response = {};

                // if token expired
                if (error.name === 'TokenExpiredError') {
                    response = { error, ...responses.NOT_LOGGEDIN.error };
                } else {
                    logger.error(error);
                    response = { error, ...responses.AUTH_ERROR.error };
                }

                res.status(response.status).json(response);
            }
        }
    };
};