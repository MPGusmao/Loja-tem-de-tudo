const responses = require('./vendedor.response.json')

const createSalesman = async (connection, body) => {
    try {
        if (!body.NOME_VENDEDOR) {
            throw new Error(`Body is not defined: ${body}`)
        }
        const query = `
            INSERT INTO 
                XCV90760.VENDEDOR
                (
                    NOME_VENDEDOR
                )
                values
                (
                    '${body.NOME_VENDEDOR}'
                );`;
        const result = await connection.query(query)
        return { data: result, ...responses.CREATE_SALESMAN.success };
    } catch (error) {
        return { error, ...responses.CREATE_SALESMAN.error };
    }
};

const getAllSalesman = async (connection) => {
    try {
        const query = `
            SELECT
                NOME_VENDEDOR
            FROM
                XCV90760.VENDEDOR`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_SALESMAN.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_SALESMAN.error };
    }
};

const getSalesmanByName = async (connection, salesman) => {
    try {
        const query = `
            SELECT
                ID
            FROM
                XCV90760.VENDEDOR
            WHERE 
                NOME_VENDEDOR = '${salesman}'`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_SALESMAN_BY_NAME.success };
    } catch (error) {
        return { error, ...responses.GET_SALESMAN_BY_NAME.error };
    }
};

module.exports = {
    createSalesman,
    getAllSalesman,
    getSalesmanByName
}