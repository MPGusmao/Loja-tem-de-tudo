const responses = require('./venda.responses.json');
const { parseResult } = require('../utils/index.js');
const { parseResultArray } = require('../utils/index.js');

const createSale = async (connection, clientId, salesmanId, produtoId, body) => {
    try {
        if (!clientId || !salesmanId || !body || !produtoId) {
            throw new Error(`ClientId, salesmanId, body or produtoId is not defined`)
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
                PRECO,
                PRODUTO_ID
            )
            values
            (
                '${result[0].ID}',
                '${body.NOME_PRODUTO}',
                '${body.QTDE}',
                '${body.VALOR}',
                '${produtoId}'
            ); `
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
                V.ID,
                VARCHAR_FORMAT(DATE, 'DD/MM/YYYY') AS DATE,
                    C.NOME_CLIENTE,
                    'R$ ' || VI.PRECO AS VALOR,
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
                VARCHAR_FORMAT(DATE, 'YYYY-MM-DD') BETWEEN '${date_ini}' AND '${date_fim}'
                ORDER BY V.ID; `
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_SALES.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_SALES.error };
    }
};

const getSaleById = async (connection, id) => {
    try {
        if (!id) {
            throw new Error(`ID is not defined: ${id} `)
        }
        const query = `
            SELECT
                V.ID,
                C.NOME_CLIENTE,
                VE.NOME_VENDEDOR,
                ITEM AS NOME_PRODUTO,
                QTDE,
                VI.PRECO AS VALOR
            FROM
                XCV90760.VENDA AS V
            INNER JOIN
                XCV90760.VENDA_ITEM AS VI ON V.ID = VI.VENDA_ID
            INNER JOIN
                XCV90760.CLIENTE AS C ON V.CLIENTE_ID = C.ID
            INNER JOIN
                XCV90760.VENDEDOR AS VE ON V.VENDEDOR_ID = VE.ID
            WHERE
                V.ID = '${id}'; `
        const result = await connection.query(query)
        return { data: result, ...responses.GET_SALE_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_SALE_BY_ID.error };
    }
};

const removeSale = async (connection, id) => {
    try {
        if (!id) {
            throw new Error(`ID is not defined`)
        }
        const queryItem = `
            DELETE FROM
                XCV90760.VENDA_ITEM
            WHERE
                VENDA_ID = ${id}; `;
        const resultItem = await connection.query(queryItem)

        const query = `
            DELETE FROM
                XCV90760.VENDA
            WHERE
                ID = ${id}; `;
        const result = await connection.query(query)
        console.log(result)
        return { data: result, ...responses.REMOVE_SALE.success };
    } catch (error) {
        console.log(error)
        return { error, ...responses.REMOVE_SALE.error };
    }
};

const updateSale = async (connection, clientId, salesmanId, body, id) => {
    try {
        if (!clientId || !salesmanId || !body || !id) {
            throw new Error(`clienteId, Salesman, Body or id is not defined`)
        }
        const query = `
            UPDATE
                XCV90760.VENDA AS V
            SET
                CLIENTE_ID = '${clientId}',
                VENDEDOR_ID = '${salesmanId}'
            WHERE
            V.ID = '${id}'; `;
        const result = await connection.query(query)

        const queryItem = `
            UPDATE
                XCV90760.VENDA_ITEM AS VI
            SET
                ITEM = '${body.NOME_PRODUTO}',
                QTDE = '${body.QTDE}',
                PRECO = '${body.VALOR}'
            WHERE
            VI.VENDA_ID = '${id}'; `;
        const resultItem = await connection.query(queryItem)

        return { data: resultItem, ...responses.UPDATE_SALE.success };
    } catch (error) {
        return { error, ...responses.UPDATE_SALE.error };
    }
};

const getReportSale = async (connection, date_ini, date_fim) => {
    try {
        if (!date_ini || !date_fim || date_ini > date_fim) {
            throw new Error(`Date Inital or date final is undefined or date Initial is bigger than date final`)
        }

        const query = `
            SELECT
                C.NOME_CLIENTE,
                VI.PRECO AS VALOR
            FROM
            XCV90760.VENDA AS V
            INNER JOIN
            XCV90760.VENDA_ITEM AS VI ON V.ID = VI.VENDA_ID
            INNER JOIN
            XCV90760.CLIENTE AS C ON V.CLIENTE_ID = C.ID
            WHERE
            VARCHAR_FORMAT(DATE, 'YYYY-MM-DD') BETWEEN '${date_ini}' AND '${date_fim}'
            ORDER BY C.NOME_CLIENTE; `
        const result = await connection.query(query)

        return { data: parseResult(result), ...responses.GET_REPORT_SALE.success };
    } catch (error) {
        return { error, ...responses.GET_REPORT_SALE.error };
    }
};

const getReportSalesman = async (connection, date_ini, date_fim) => {
    try {
        if (!date_ini || !date_fim || date_ini > date_fim) {
            throw new Error(`Date Inital or date final is undefined or date Initial is bigger than date final`)
        }

        const query = `
            SELECT
                VE.NOME_VENDEDOR,
                VI.PRECO AS VALOR
            FROM
            XCV90760.VENDA AS V
            INNER JOIN
                XCV90760.VENDA_ITEM AS VI ON V.ID = VI.VENDA_ID
            INNER JOIN
                XCV90760.VENDEDOR AS VE ON V.VENDEDOR_ID = VE.ID
            WHERE
                VARCHAR_FORMAT(DATE, 'YYYY-MM-DD') BETWEEN '${date_ini}' AND '${date_fim}'
                ORDER BY VI.PRECO ASC; `
        const result = await connection.query(query)

        return { data: parseResultArray(result), ...responses.GET_REPORT_SALESMAN.success };
    } catch (error) {
        return { error, ...responses.GET_REPORT_SALESMAN.error };
    }
};

const getReportProfit = async (connection, date_ini, date_fim) => {
    try {
        if (!date_ini || !date_fim || date_ini > date_fim) {
            throw new Error(`Date Inital or date final is undefined or date Initial is bigger than date final`)
        }

        const query = `
            SELECT
                P.NOME_PRODUTO,
                P.PRECO_CUSTO,
                P.PRECO_VENDA,
                PRECO,
                QTDE
            FROM
                XCV90760.VENDA AS V
            INNER JOIN
                XCV90760.VENDA_ITEM AS VI ON V.ID = VI.VENDA_ID
            INNER JOIN
                XCV90760.CLIENTE AS C ON V.CLIENTE_ID = C.ID
            INNER JOIN
                XCV90760.VENDEDOR AS VE ON V.VENDEDOR_ID = VE.ID
            INNER JOIN
                XCV90760.PRODUTO AS P ON VI.PRODUTO_ID = P.ID
            WHERE
                VARCHAR_FORMAT(DATE, 'YYYY-MM-DD') BETWEEN '${date_ini}' AND '${date_fim}'
                ORDER BY VI.PRECO ASC; `
        const result = await connection.query(query)

        return { data: result, ...responses.GET_REPORT_PROFIT.success };
    } catch (error) {
        return { error, ...responses.GET_REPORT_PROFIT.error };
    }
};

module.exports = {
    createSale,
    getAllSales,
    getSaleById,
    removeSale,
    updateSale,
    getReportSale,
    getReportSalesman,
    getReportProfit
}