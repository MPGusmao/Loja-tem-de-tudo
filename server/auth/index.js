const passport = require('passport');

const authSetup = require('./auth.setup');
const JWT = require('./jwt');
const logger = require('../logger')();
const user = require('../user/user.model');

module.exports = (app, Router, config) => {
    const router = Router();
    const jwt = JWT(config);

    authSetup(app, passport, config);

    router.get('/login', passport.use('', { state: Math.random().toString(36).substr(2, 10) }));


    return { authRouter: router, validateToken: jwt.validate };
};