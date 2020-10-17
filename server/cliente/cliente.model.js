const responses = require('./cliente.response.json')

const insertClient = async (connection, base, body) => {
    try {
        const query = `
        INSERT INTO ${base}.CLIENTE
        (
            NOME_CLIENTE,
            ENDERECO,
            TELEFONE
        )
        VALUES
        (
            '${body.NOME_CLIENTE}',
            '${body.ENDERECO}',
            '${body.TELEFONE}'
        );`;
        const result = await connection.query(query)
        return { data: result, ...responses.INSERT_CLIENT.success };
    } catch (error) {
        return { error, ...responses.INSERT_CLIENT.error };
    };
};

const getAllClients = async (connection, base) => {
    try {
        const query = `
        SELECT 
            NOME_CLIENTE
        FROM 
            ${base}.CLIENTE AS C;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_CLIENTS.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_CLIENTS.error };
    };
};
module.exports = {
    insertClient,
    getAllClients
}