const request = require('./produto.model');

const createProduct = async (req, res) => {
    try {
        const body = req.body
        const result = await request.createProduct(body, req.dbConnection)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getAllProduct = async (req, res) => {
    try {
        const result = await request.getAllProduct(req.dbConnection)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};
module.exports = {
    createProduct,
    getAllProduct
};