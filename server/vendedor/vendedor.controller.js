const request = require('./vendedor.model.js')

const insertVendedor = async (req, res) => {
    try {
        const body = req.body;
        const base = req.schemaNames.xcv90760;
        const result = await request.insertVendedor(req.dbConnection, body, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getAllVendedor = async (req, res) => {
    try {
        console.log(req)
        const body = req.body;
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllVendedor(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getVendedorById = async (req, res) => {
    try {
        const id = req.body.id
        const base = req.schemaNames.xcv90760;
        const result = await request.getVendedorById(req.dbConnection, base, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const updateVendedor = async (req, res) => {
    try {
        const body = req.body;
        const id = req.body.ID
        const base = req.schemaNames.xcv90760;
        const result = await request.updateVendedor(req.dbConnection, base, body, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getVendedorName = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getVendedorName(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}
module.exports = {
    insertVendedor,
    getAllVendedor,
    getVendedorById,
    updateVendedor,
    getVendedorName
}