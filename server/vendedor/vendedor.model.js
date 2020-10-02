const responses = require('./vendedor.response.json')

const insertSalesman = async (connection, base, body) => {
    try {
        const query = `
        INSERT INTO ${base}.VENDEDOR
        (
            NOME_VENDEDOR
        )
        VALUES
        (
            '${body.NOME_VENDEDOR}'
        );`;
        const result = await connection.query(query)
        return { data: result, ...responses.INSERT_SALESMAN.success };
    } catch (error) {
        return { error, ...responses.INSERT_SALESMAN.error };
    };
};

const getAllSalesman = async (connection, base, body) => {
    try {
        const query = `
        SELECT
            NOME_VENDEDOR
        FROM 
            ${base}.VENDEDOR;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_SALESMAN.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_SALESMAN.error };
    };
};
module.exports = {
    insertSalesman,
    getAllSalesman
}