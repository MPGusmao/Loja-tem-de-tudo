const controller = require('./produto.controller.js');

module.exports = (Router) => {
    const router = Router();

    router.post('/create', controller.createProduct);
    router.get('/product', controller.getAllProduct);
    router.post('/byid', controller.getProductById);
    router.post('/update', controller.updateProduct)

    return router;
};