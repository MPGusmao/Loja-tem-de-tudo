const controller = require('./venda.controller.js');

module.exports = (Router) => {
    const router = Router();

    router.post('/create', controller.createSale);
    router.post('/all', controller.getAllSales);
    router.post('/byId', controller.getSaleById);
    router.post('/update', controller.updateSale);
    router.post('/remove', controller.removeSale);
    router.post('/report', controller.getReportSale);
    router.post('/reportSalesman', controller.getReportSalesman);

    return router;
};