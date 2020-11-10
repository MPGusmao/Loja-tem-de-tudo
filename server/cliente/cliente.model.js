const responses = require('./cliente.responses.json')

const createClient = async (connection, body) => {
    try {
        if (!body.NOME_CLIENTE || !body.ENDERECO || !body.TELEFONE) {
            throw new Error(`Body is not defined: ${body}`)
        }
        const query = `
            INSERT INTO 
                XCV90760.CLIENTE
                (
                    NOME_CLIENTE,
                    ENDERECO,
                    TELEFONE
                )
                values
                (
                    '${body.NOME_CLIENTE}',
                    '${body.ENDERECO}',
                    '${body.TELEFONE}'
                );`;
        const result = await connection.query(query)
        return { data: result, ...responses.CREATE_CLIENT.success };
    } catch (error) {
        return { error, ...responses.CREATE_CLIENT.error };
    }
};

const getClients = async (connection) => {
    try {
        const query = `
            SELECT 
                NOME_CLIENTE
            FROM
                XCV90760.CLIENTE`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_CLIENTS.success };
    } catch (error) {
        return { error, ...responses.GET_CLIENTS.error };
    }
};

const getClientByName = async (connection, client) => {
    try {console.log(client)
        const query = `
            SELECT 
                ID
            FROM
                XCV90760.CLIENTE
            WHERE 
                NOME_CLIENTE = '${client}' `;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_CLIENTS.success };
    } catch (error) {

    }
}
module.exports = {
    createClient,
    getClients,
    getClientByName
}