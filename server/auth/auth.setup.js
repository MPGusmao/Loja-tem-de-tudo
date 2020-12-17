const { Strategy } = require("passport-local");
const db2 = require("../database/db2");
const serializationResolver = (obj, done) => done(null, obj);

const getDB = config => {
    const generator = db2(config);
    return {
        getConnection: generator.getConnection
    };
};

const getUser = async (connection, email, password, callback) => {
    try {
        const query = `
            SELECT
                EMAIL,
                PASSWORD
            FROM XCV90760.LOGIN
            WHERE 
                EMAIL = ${email};`;
        const result = await connection.query(query);
        const user = result[0] || false;
        callback(null, user);
    } catch (error) {
        callback(error, null);
    }
};

const getStrategy = config => {
    const db = getDB(config);
    return new Strategy(function(username, password, cb) {
        getUser(db.getConnection(), username, password, function(err, user) {
            if (err) {
                return cb(err);
            }
            if (!user) {
                return cb(null, false);
            }
            if (user.password != password) {
                return cb(null, false);
            }
            return cb(null, user);
        });
    });
};

module.exports = (app, passport, config) => {
    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(serializationResolver);
    passport.deserializeUser(serializationResolver);

    passport.use(getStrategy(config));
};
