const responses = require('./venda.responses.json');

const createSale = async (connection, clientId, salesmanId, body) => {
    try {
        if (!clientId || !salesmanId || !body) {
            throw new Error(`ClientId, salesmanId or body is not defined`)
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

const getAllSales = async (connection, date_ini, date_fim) => {
    try {
        if (!date_ini || !date_fim) {
            throw new Error(`Date Inital or date final is undefined`)
        }
        const query = `
        SELECT 
            VARCHAR_FORMAT(DATE, 'DD/MM/YYYY') AS DATE, 
            C.NOME_CLIENTE,
           'R$ ' ||  VI.PRECO AS VALOR,
            VE.NOME_VENDEDOR               
        FROM 
            XCV90760.VENDA AS V
        INNER JOIN 
            XCV90760.VENDA_ITEM AS VI ON V.ID = VI.VENDA_ID
        INNER JOIN 
            XCV90760.CLIENTE AS C ON V.CLIENTE_ID = C.ID
        INNER JOIN 
            XCV90760.VENDEDOR AS VE ON V.VENDEDOR_ID = VE.ID
        WHERE 
            VARCHAR_FORMAT(DATE, 'YYYY-MM-DD') BETWEEN '${date_ini}' AND '${date_fim}';`
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_SALES.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_SALES.error };
    }
};
module.exports = {
    createSale,
    getAllSales
}