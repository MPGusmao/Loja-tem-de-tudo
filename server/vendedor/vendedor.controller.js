const request = require('./vendedor.model.js')

const insertSalesman = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.insertSalesman(req.dbConnection, base, body);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getAllSalesman = async (req, res) => {
    try {
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllSalesman(req.dbConnection, base);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

module.exports = {
    insertSalesman,
    getAllSalesman
}