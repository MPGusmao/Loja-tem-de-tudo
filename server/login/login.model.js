const responses = require('./login.responses.json');

const getUserById = async (connection, email, password) => {
    try {
        if (email !== 'admin@temdetudo.com' && password !== '12345') {
            throw new Error(`Email or password is invalid`)
        }
        const query = `
            SELECT 
                EMAIL,
                PASSWORD
            FROM
                XCV90760.LOGIN AS L
            WHERE 
                L.EMAIL = '${email}' AND L.PASSWORD = '${password}';`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_USER_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_USER_BY_ID.error };
    }
};

module.exports = {
    getUserById
}