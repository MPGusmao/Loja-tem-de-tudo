const request = require('./cliente.model.js')

const insertClient = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.insertClient(req.dbConnection, base, body);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}

const getAllClients = async (req, res) => {
    try {
        const body = req.body
        const base = req.schemaNames.xcv90760;
        const result = await request.getAllClients(req.dbConnection, base, body);
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
}
module.exports = {
    insertClient,
    getAllClients
}