const request = require('./produto.model.js')

const insertProduto = async (req, res) => {
    try {
        console.log('id')
        const body = req.body;
        const base = req.schemaNames.xcv90760;
        const result = await request.insertProduto(req.dbConnection, body, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getAllProduto = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllProduto(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getProdutoById = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const { id } = req.body
        const result = await request.getProdutoById(req.dbConnection, base, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const removeProduto = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const { id } = req.body
        const result = await request.removeProduto(req.dbConnection, base, id);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const updateProduto = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const ID = req.body.ID
        const result = await request.updateProduto(req.dbConnection, base, body, ID);
        return res.status(result.status).json(result);
    } catch (error) {
        console.log(error)
        return res.status(error.status || 500).json(error);
    }
}

module.exports = {
    insertProduto,
    getAllProduto,
    getProdutoById,
    removeProduto,
    updateProduto
}