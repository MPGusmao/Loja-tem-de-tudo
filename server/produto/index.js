const { Router } = require('express')
const controller = require('./produto.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.get('/all', controller.getAllProduct);
    router.post('/create', controller.createProduct);

    return router
}