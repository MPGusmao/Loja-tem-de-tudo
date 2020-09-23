const { Router } = require('express')
const controller = require('./venda.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.post('/insert', controller.insertVenda)
    router.get('/all', controller.getAllVenda)

    return router
}