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
    } catch (error) {console.log(error)
        return { error, ...responses.GET_ALL_PRODUCT.error };
    };
};

module.exports = {
    getAllProduct
}