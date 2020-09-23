const responses = require('./vendedor.response.json')

const insertVendedor = async (connection, body, base) => {
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
        return { data: result, ...responses.INSERT_VENDEDOR.success };
    } catch (error) {
        return { error, ...responses.INSERT_VENDEDOR.error };
    };
};

const getAllVendedor = async (connection, base) => {
    try {
        const query = `
        SELECT 
            ID,
            NOME_VENDEDOR
        FROM 
            ${base}.VENDEDOR AS V
        ORDER BY V.ID;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_VENDEDOR.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_VENDEDOR.error };
    };
};

const getVendedorById = async (connection, base, id) => {
    try {
        const query = `
        SELECT
            NOME_VENDEDOR
        FROM 
            ${base}.VENDEDOR AS V
        WHERE ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_VENDEDOR_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_VENDEDOR_BY_ID.error };
    };
};

const updateVendedor = async (connection, base, body, id) => {
    try {
        const query = `
        UPDATE ${base}.VENDEDOR
        SET
            NOME_VENDEDOR = '${body.NOME_VENDEDOR}'
        WHERE ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.UPDATE_VENDEDOR.success };
    } catch (error) {
        return { error, ...responses.UPDATE_VENDEDOR.error };
    };
};

const getVendedorName = async (connection, base) => {
    try {
        const query = `
        SELECT 
            NOME_VENDEDOR
        FROM 
            ${base}.VENDEDOR AS V
        ORDER BY V.ID;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_VENDEDOR_NAME.success };
    } catch (error) {
        return { error, ...responses.GET_VENDEDOR_NAME.error };
    };
};

module.exports = {
    insertVendedor,
    getAllVendedor,
    getVendedorById,
    updateVendedor,
    getVendedorName
}