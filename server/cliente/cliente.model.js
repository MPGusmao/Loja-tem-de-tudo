const responses = require('./cliente.response.json')

const insertCliente = async (connection, base, body) => {
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
        return { data: result, ...responses.INSERT_CLIENTE.success };
    } catch (error) {
        return { error, ...responses.INSERT_CLIENTE.error };
    };
};

const getAllCliente = async (connection, base) => {
    try {
        const query = `
        SELECT 
            ID,
            NOME_CLIENTE,
            ENDERECO,
            TELEFONE
        FROM 
            ${base}.CLIENTE
        ORDER BY ID ASC;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_CLIENTE.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_CLIENTE.error };
    };
};

const getClienteById = async (connection, base, id) => {
    try {
        const query = `
        SELECT 
            ID,
            NOME_CLIENTE,
            ENDERECO,
            TELEFONE
        FROM 
            ${base}.CLIENTE
        WHERE ID = ${id}
        ORDER BY ID ASC;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_CLIENTE_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_CLIENTE_BY_ID.error };
    };
};

const updateCliente = async (connection, base, body, id) => {
    try {
        const query = `
        UPDATE ${base}.CLIENTE
        SET
            NOME_CLIENTE = '${body.NOME_CLIENTE}',
            ENDERECO = '${body.ENDERECO}',
            TELEFONE = '${body.TELEFONE}'
        WHERE ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.UPDATE_CLIENTE.success };
    } catch (error) {
        return { error, ...responses.UPDATE_CLIENTE.error };
    };
};

const removeCliente = async (connection, base, id) => {
    try {
        const query = `
        DELETE ${base}.CLIENTE
        WHERE ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.REMOVE_CLIENTE.success };
    } catch (error) {
        return { error, ...responses.REMOVE_CLIENTE.error };
    };
};

const nameCliente = async (connection, base) => {
    try {
        const query = `
        SELECT 
            NOME_CLIENTE
        FROM 
            ${base}.CLIENTE;`;
        const result = await connection.query(query)
        return { data: result, ...responses.NAME_CLIENTE.success };
    } catch (error) {
        return { error, ...responses.NAME_CLIENTE.error };
    };
};

module.exports = {
    insertCliente,
    getAllCliente,
    getClienteById,
    updateCliente,
    removeCliente,
    nameCliente
}