const { Router } = require('express')
const controller = require('./produto.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.post('/insert', controller.insertProduto);
    router.get('/all', controller.getAllProduto);
    router.post('/byid', controller.getProdutoById);
    router.post('/remove', controller.removeProduto);
    router.post('/update', controller.updateProduto)

    return router
}
