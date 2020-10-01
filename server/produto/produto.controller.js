const request = require('./produto.model.js')

const getAllProduct = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllProduct(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {console.log(error)
        return res.status(error.status || 500).json(error);
    }
}

module.exports = {
    getAllProduct
}