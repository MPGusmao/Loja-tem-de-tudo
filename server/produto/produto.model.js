const responses = require('./produto.response.json')

const getAllProduct = async (connection, base) => {
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
            QTDE_ESTOQUE,
            QTDE_LOJA
        FROM ${base}.PRODUTO AS P
        ORDER BY P.ID;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_ALL_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_PRODUCT.error };
    };
};

const createProduct = async (connection, base, body) => {
    try {
        const query = `
        INSERT INTO ${base}.PRODUTO
        (
            NOME_PRODUTO,
            DESCRICAO,
            MARCA,
            FORNECEDOR,
            CLASSIFICACAO,
            PRECO_CUSTO,
            PRECO_VENDA,
            QTDE_ESTOQUE,
            QTDE_LOJA
        )
        VALUES
        (
            '${body.NOME_PRODUTO}',
            '${body.DESCRICAO}',
            '${body.MARCA}',
            '${body.FORNECEDOR}',
            '${body.CLASSIFICACAO}',
            '${body.PRECO_CUSTO}',
            '${body.PRECO_VENDA}',
            '${body.QTDE_ESTOQUE}',
            '${body.QTDE_LOJA}'
        );`;
        const result = await connection.query(query)
        return { data: result, ...responses.CREATE_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.CREATE_PRODUCT.error };
    };
};

const getProductById = async (connection, base, ID) => {
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
            QTDE_ESTOQUE,
            QTDE_LOJA
        FROM ${base}.PRODUTO AS P
        WHERE ID = ${ID}
        ORDER BY P.ID;`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_PRODUCT_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_PRODUCT_BY_ID.error };
    };
};

const updateProduct = async (connection, base, body) => {
    try {
        const query = `
        UPDATE ${base}.PRODUTO 
        SET 
            NOME_PRODUTO = '${body.NOME_PRODUTO}', 
            DESCRICAO = '${body.DESCRICAO}',
            MARCA = '${body.MARCA}',
            FORNECEDOR = '${body.FORNECEDOR}',
            CLASSIFICACAO = '${body.CLASSIFICACAO}',
            PRECO_CUSTO = '${body.PRECO_CUSTO}',
            PRECO_VENDA = '${body.PRECO_VENDA}',
            QTDE_ESTOQUE = '${body.QTDE_ESTOQUE}',
            QTDE_LOJA = '${body.QTDE_LOJA}' 
        WHERE ID = ${body.ID};`;
        const result = await connection.query(query)
        return { data: result, ...responses.UPDATE_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.UPDATE_PRODUCT.error };
    };
};

const removeProduct = async (connection, base, id) => {
    try {
        const query = `
        DELETE 
        FROM ${base}.PRODUTO AS P
        WHERE P.ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.REMOVE_PRODUCT.success };
    } catch (error) {
        return { error, ...responses.REMOVE_PRODUCT.error };
    };
};
module.exports = {
    getAllProduct,
    createProduct,
    getProductById,
    updateProduct,
    removeProduct
}