const passportLocal = require('passport-local').Strategy;
const serializationResolver = (obj, done) => done(null, obj);

const getStrategy = (config) => {
    function strategy() {
        return new Strategy(
            function (username, password, cb) {
                db.users.findByUsername(username, function (err, user) {
                    if (err) { return cb(err); }
                    if (!user) { return cb(null, false); }
                    if (user.password != password) { return cb(null, false); }
                    return cb(null, user);
                });
            })
    }

    return strategy;
};

module.exports = (app, passport, config) => {
    const strategy = getStrategy(config);
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(serializationResolver);
    passport.deserializeUser(serializationResolver);

    passport.use(strategy());
};