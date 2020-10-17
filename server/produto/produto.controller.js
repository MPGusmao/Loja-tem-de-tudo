const request = require('./produto.model.js')

const getAllProduct = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllProduct(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const createProduct = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.createProduct(req.dbConnection, base, body);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getProductById = async (req, res) => {
    try {
        const id = req.body.id
        const base = req.schemaNames.xcv90760;
        const result = await request.getProductById(req.dbConnection, base, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const updateProduct = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.updateProduct(req.dbConnection, base, body);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const removeProduct = async (req, res) => {
    try {
        const { id } = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.removeProduct(req.dbConnection, base, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}
module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    updateProduct,
    removeProduct
}