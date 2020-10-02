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
        console.log(error)
        return { error, ...responses.CREATE_PRODUCT.error };
    };
};
module.exports = {
    getAllProduct,
    createProduct
}