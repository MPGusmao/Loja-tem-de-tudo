const controller = require('./vendedor.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.post('/insert', controller.insertVendedor)
    router.get('/all', controller.getAllVendedor)
    router.post('/byid', controller.getVendedorById)
    router.post('/update', controller.updateVendedor)
    router.get('/name', controller.getVendedorName)

    return router
}
