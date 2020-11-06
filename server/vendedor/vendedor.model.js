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

module.exports = {
    createSalesman
}