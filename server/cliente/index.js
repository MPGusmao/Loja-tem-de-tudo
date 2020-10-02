const { Router } = require('express')
const controller = require('./cliente.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.post('/create', controller.insertClient);

    return router
}