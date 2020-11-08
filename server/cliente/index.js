const controller = require('./cliente.controller.js');

module.exports = (Router) => {
    const router = Router();

    router.post('/create', controller.createClient);
    router.get('/all', controller.getClients);

    return router;
};