const controller = require('./cliente.controller.js')

module.exports = (Router) => {
    const router = Router()

    router.post('/insert', controller.insertCliente);
    router.get('/all', controller.getAllCliente);
    router.post('/byid', controller.getClienteById);
    router.post('/update', controller.updateCliente);
    router.post('/remove', controller.removeCliente);
    router.get('/nameCliente', controller.nameCliente)

    return router
}
