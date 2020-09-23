const request = require('./venda.model.js')
const produtoModel = require('../produto/produto.model.js')

const insertVenda = async (req, res) => {
    try {
        const body = req.body;
        const base = req.schemaNames.xcv90760;
        const result = await request.insertVenda(req.dbConnection, body, base);
        const resultProduto = await produtoModel.updateQuantidadeLoja(req.dbConnection, body.PRODUTO, body.QUANTIDADE, base)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getAllVenda = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllVenda(req.dbConnection, base)
        return res.status(result.status).json(result)
    } catch (error) {
        return res.status(error.status || 500).json(error)
    }
}
module.exports = {
    insertVenda,
    getAllVenda

}