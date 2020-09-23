const responses = require('./produto.response.json')

const insertProduto = async (connection, body, base) => {
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
        return { data: result, ...responses.INSERT_PRODUTO.success };
    } catch (error) {
        return { error, ...responses.INSERT_PRODUTO.error };
    };
};

const getAllProduto = async (connection, base) => {
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
        return { data: result, ...responses.GET_ALL_PRODUTO.success };
    } catch (error) {
        return { error, ...responses.GET_ALL_PRODUTO.error };
    };
};

const getProdutoById = async (connection, base, id) => {
    try {
        const query = `
        SELECT 
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
        WHERE P.ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.GET_PRODUTO_BY_ID.success };
    } catch (error) {
        return { error, ...responses.GET_PRODUTO_BY_ID.error };
    };
};

const removeProduto = async (connection, base, id) => {
    try {
        const query = `
        DELETE 
        FROM ${base}.PRODUTO AS P
        WHERE P.ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.REMOVE_PRODUTO.success };
    } catch (error) {
        return { error, ...responses.REMOVE_PRODUTO.error };
    };
};

const updateProduto = async (connection, base, body, id) => {
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
        WHERE ID = ${id};`;
        const result = await connection.query(query)
        return { data: result, ...responses.UPDATE_PRODUTO.success };
    } catch (error) {
        return { error, ...responses.UPDATE_PRODUTO.error };
    };
};

const updateQuantidadeLoja = async (connection, descricao, qtde, base) => {
    try {
        const query = `
        UPDATE 
            ${base}.PRODUTO 
        SET 
            QTDE_LOJA = QTDE_LOJA - ${qtde}
        WHERE 
            DESCRICAO = '${descricao}';`
        const result = await connection.query(query)
        return { data: result, ...responses.UPDATE_QUANTIDADE_PRODUTO.success };
    } catch (error) {
        return { error, ...responses.UPDATE_QUANTIDADE_PRODUTO.error };
    }
}

module.exports = {
    insertProduto,
    getAllProduto,
    getProdutoById,
    removeProduto,
    updateProduto,
    updateQuantidadeLoja
}