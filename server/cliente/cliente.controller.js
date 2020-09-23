const request = require('./cliente.model')

const insertCliente = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.insertCliente(req.dbConnection, base, body);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getAllCliente = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllCliente(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getClienteById = async (req, res) => {
    try {
        const id = req.body.id;
        const base = req.schemaNames.xcv90760;
        const result = await request.getClienteById(req.dbConnection, base, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const updateCliente = async (req, res) => {
    try {
        const id = req.body.ID;
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.updateCliente(req.dbConnection, base, body, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const removeCliente = async (req, res) => {
    try {
        const { id } = req.body;
        const base = req.schemaNames.xcv90760;
        const result = await request.removeCliente(req.dbConnection, base, id);
        console.log(result)
        return res.status(result.status).json(result);
    } catch (error) {console.log(error)
        return res.status(error.status || 500).json(error);
    }
}

const nameCliente = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.nameCliente(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

module.exports = {
    insertCliente,
    getAllCliente,
    getClienteById,
    updateCliente,
    removeCliente,
    nameCliente
}