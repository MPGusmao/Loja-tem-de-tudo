const controller = require('./vendedor.controller.js');

module.exports = (Router) => {
    const router = Router();

    router.post('/create', controller.createSalesman);

    return router;
};