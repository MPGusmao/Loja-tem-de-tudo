const request = require('./vendedor.model');

const createSalesman = async (req, res) => {
    try {
        const body = req.body
        const result = await request.createSalesman(req.dbConnection, body)
        return res.status(result.status).json(result);
    } catch (error) {
        return res.status(error.status || 500).json(error);
    }
};
module.exports = {
    createSalesman
}