const controller = require('./login.controller.js');

module.exports = (Router) => {
    const router = Router();

    router.post('/byid', controller.getUserById);

    return router
}
