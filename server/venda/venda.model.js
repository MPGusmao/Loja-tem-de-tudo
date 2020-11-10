const responses = require('./venda.responses.json');

const createSale = async (connection, clientId, salesmanId, body) => {
    try {
        if (!clientId || !salesmanId || !body) {
            throw new Error(`ID is not defined: ${id}`)
        }
        const query = `
        SELECT ID FROM NEW TABLE(INSERT INTO 
            XCV90760.VENDA
            (
                CLIENTE_ID,
                VENDEDOR_ID
            )
            values
            (
                '${clientId}',
                '${salesmanId}'
            ));`
        const result = await connection.query(query)

        const queryItems = `
        INSERT INTO 
            XCV90760.VENDA_ITEM
            (
                VENDA_ID,
                ITEM,
                QTDE,
                PRECO
            )
            values
            (
                '${result[0].ID}',
                '${body.NOME_PRODUTO}',
                '${body.QUANTIDADE}',
                '${body.valor}'
            );`
        const resultItems = await connection.query(queryItems)
        return { data: resultItems, ...responses.CREATE_SALE.success };
    } catch (error) {
        return { error, ...responses.CREATE_SALE.error };
    }
};

module.exports = {
    createSale
}