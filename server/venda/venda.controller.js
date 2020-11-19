const request = require('./venda.model.js');
const requestClient = require('../cliente/cliente.model.js');
const requestSalesman = require('../vendedor/vendedor.model.js');
const requestProduct = require('../produto/produto.model')

const createSale = async (req, res) => {
    try {
        const body = req.body
        const client = req.body.NOME_CLIENTE
        const salesman = req.body.NOME_VENDEDOR
        const product = req.body.NOME_PRODUTO
        const resultClient = await requestClient.getClientByName(req.dbConnection, client)
        const resultSalesman = await requestSalesman.getSalesmanByName(req.dbConnection, salesman)
        const resultProduct = await requestProduct.getProductByName(req.dbConnection, product)
        const result = await request.createSale(req.dbConnection, resultClient.data[0].ID, resultSalesman.data[0].ID, resultProduct.data[0].ID, body)
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

const getSaleById = async (req, res) => {
    try {
        const id = req.body.id
        const result = await request.getSaleById(req.dbConnection, id)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const updateSale = async (req, res) => {
    try {
        const id = req.body.ID
        const body = req.body
        const client = req.body.NOME_CLIENTE
        const salesman = req.body.NOME_VENDEDOR
        const resultClient = await requestClient.getClientByName(req.dbConnection, client)
        const resultSalesman = await requestSalesman.getSalesmanByName(req.dbConnection, salesman)
        const result = await request.updateSale(req.dbConnection, resultClient.data[0].ID, resultSalesman.data[0].ID, body, id)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const removeSale = async (req, res) => {
    try {
        const id = req.body.id
        const result = await request.removeSale(req.dbConnection, id)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getReportSale = async (req, res) => {
    try {
        const dateIni = req.body.dateIni
        const dateFim = req.body.dateFim
        const result = await request.getReportSale(req.dbConnection, dateIni, dateFim)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getReportSalesman = async (req, res) => {
    try {
        const dateIni = req.body.dateIni
        const dateFim = req.body.dateFim
        const result = await request.getReportSalesman(req.dbConnection, dateIni, dateFim)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

const getReportProfit = async (req, res) => {
    try {
        const dateIni = req.body.dateIni
        const dateFim = req.body.dateFim
        const result = await request.getReportProfit(req.dbConnection, dateIni, dateFim)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};

module.exports = {
    createSale,
    getAllSales,
    getSaleById,
    updateSale,
    removeSale,
    getReportSale,
    getReportSalesman,
    getReportProfit
}