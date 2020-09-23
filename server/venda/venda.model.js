const responses = require('./venda.response.json')

const insertVenda = async (connection, body, base) => {
    try {
        const query = `
            INSERT INTO ${base}.VENDA
            (
                NOME_CLIENTE,
                NOME_VENDEDOR,
                ITEM,
                QTDE,
                PRECO
            )
            VALUES
            (
                '${body.NOME_CLIENTE}',
                '${body.NOME_VENDEDOR}',
                '${body.PRODUTO}',
                '${body.QUANTIDADE}',
                '${body.VALOR}'
            );`;
        const result = await connection.query(query)
        return { data: result, ...responses.INSERT_VENDA.success };
    } catch (error) {
        return { error, ...responses.INSERT_VENDA.error };
    };
};

const getAllVenda = async (connection, base) => {
    try {
        const query = `
        SELECT 
            ID,
            NOME_CLIENTE,
            VARCHAR_FORMAT(DATA, 'DD/MM/YYYY') AS DATA,
            QTDE,
            ITEM,
            PRECO,
            NOME_VENDEDOR
        FROM 
            ${base}.VENDA
        ORDER BY ID ASC;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_VENDA.success }
    } catch (error) {
        return { error, ...responses.GET_ALL_VENDA.error };
    }
}

module.exports = {
    insertVenda,
    getAllVenda
}