const request = require('./login.model.js')

const getUserById = async (req, res) => {
    try {
        const email = req.body.EMAIL
        const password = req.body.PASSWORD
        const result = await request.getUserById(req.dbConnection, email, password)
        return res.status(result.status).json(result);
    } catch (error) {console.log(error)
        return res.status(error.status || 500).json(error);
    }
};

module.exports = {
    getUserById
}