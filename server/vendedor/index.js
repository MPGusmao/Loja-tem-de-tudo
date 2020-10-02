const { Router } = require('express')
const controller = require('./vendedor.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.post('/create', controller.insertSalesman);
    router.get('/all', controller.getAllSalesman)

    return router
}