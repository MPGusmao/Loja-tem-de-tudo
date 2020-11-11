const controller = require('./venda.controller.js');

module.exports = (Router) => {
    const router = Router();

    router.post('/create', controller.createSale);
    router.post('/all', controller.getAllSales);

    return router;
};