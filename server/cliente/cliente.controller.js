const request = require('./cliente.model');

const createClient = async (req, res) => {
    try {
        const body = req.body
        const result = await request.createClient(req.dbConnection, body)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};
module.exports = {
    createClient
}