const request = require('./venda.model.js');
const requestClient = require('../cliente/cliente.model.js');
const requestSalesman = require('../vendedor/vendedor.model.js')

const createSale = async (req, res) => {
    try {
        const body = req.body
        const client = req.body.NOME_CLIENTE
        const salesman = req.body.NOME_VENDEDOR
        const resultClient = await requestClient.getClientByName(req.dbConnection, client)
        const resultSalesman = await requestSalesman.getSalesmanByName(req.dbConnection, salesman)
        const result = await request.createSale(req.dbConnection, resultClient.data[0].ID, resultSalesman.data[0].ID, body)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getAllSales = async (req, res) => {
    try {
        const date_ini = req.body.DATE_INI
        const date_fim = req.body.DATE_FIM
        const result = await request.getAllSales(req.dbConnection, date_ini, date_fim)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

module.exports = {
    createSale,
    getAllSales
}