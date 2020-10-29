const responses = require('./produto.response.json')

const createProduct = async (body, connection) => {
    try {
        if (!body) {
            throw new Error(`Body is not defined: ${body}`)
        }
        const query = `
            INSERT INTO 
                XCV90760.PRODUTO
                (
                    NOME_PRODUTO,
                    DESCRICAO,
                    MARCA,
                    FORNECEDOR,
                    CLASSIFICACAO,
                    PRECO_CUSTO,
                    PRECO_VENDA,
                    QTDE_LOJA,
                    QTDE_ESTOQUE
                )
                values
                (
                    '${body.NOME_PRODUTO}',
                    '${body.DESCRICAO}',
                    '${body.MARCA}',
                    '${body.FORNECEDOR}',
                    '${body.CLASSIFICACAO}',
                    '${body.PRECO_CUSTO}',
                    '${body.PRECO_VENDA}',
                    '${body.QTDE_LOJA}',
                    '${body.QTDE_ESTOQUE}'
                );`;
        const result = await connection.query(query)
        return { data: result, ...responses.CREATE_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.CREATE_PRODUCT.error };
    }
};

const getAllProduct = async (connection) => {
    try {
        const query = `
            SELECT
                ID,
                NOME_PRODUTO,
                DESCRICAO,
                MARCA,
                FORNECEDOR,
                CLASSIFICACAO,
                PRECO_CUSTO,
                PRECO_VENDA,
                QTDE_LOJA,
                QTDE_ESTOQUE
            FROM XCV90760.PRODUTO;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_PRODUCT.error };
    }
};

const getProductById = async (connection, id) => {
    try {
        if (!id) {
            throw new Error(`ID is not defined: ${id}`)
        }
        const query = `
            SELECT
                ID,
                NOME_PRODUTO,
                DESCRICAO,
                MARCA,
                FORNECEDOR,
                CLASSIFICACAO,
                PRECO_CUSTO,
                PRECO_VENDA,
                QTDE_LOJA,
                QTDE_ESTOQUE
            FROM XCV90760.PRODUTO
            WHERE 
                ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_PRODUCT_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_PRODUCT_BY_ID.error };
    }
};

const updateProduct = async (connection, body, id) => {
    try {
        if (!body || !id) {
            throw new Error(`Body or id is not defined`)
        }
        const query = `
            UPDATE 
                XCV90760.PRODUTO as P
            SET 
                NOME_PRODUTO = '${body.NOME_PRODUTO}',
                DESCRICAO = '${body.DESCRICAO}',
                MARCA = '${body.MARCA}',
                FORNECEDOR = '${body.FORNECEDOR}',
                CLASSIFICACAO = '${body.CLASSIFICACAO}',
                PRECO_CUSTO = '${body.PRECO_CUSTO}',
                PRECO_VENDA = '${body.PRECO_VENDA}',
                QTDE_LOJA = '${body.QTDE_LOJA}',
                QTDE_ESTOQUE = '${body.QTDE_ESTOQUE}'
            WHERE 
                P.ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.UPDATE_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.UPDATE_PRODUCT.error };
    }
};
module.exports = {
    createProduct,
    getAllProduct,
    getProductById,
    updateProduct
}