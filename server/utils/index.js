const parseResult = data => {
    const namespace = {};
    const result = [];
    let total = 0
    data.forEach(row => {
        if (!namespace.hasOwnProperty(row.NOME_CLIENTE)) {
            namespace[row.NOME_CLIENTE] = {
                NOME_CLIENTE: row.NOME_CLIENTE,
                VALOR: [row.VALOR],
            };
        } else {
            namespace[row.NOME_CLIENTE].VALOR.push(row.VALOR);
        }
    });
    for (let id in namespace) {
        for (let i = 0; i < namespace[id].VALOR.length; i++) {
            total += parseFloat(namespace[id].VALOR[i].split(", ").filter(v => v))
        }
        result.push({
            NOME_CLIENTE: namespace[id].NOME_CLIENTE,
            VALOR: total.toFixed(2),
        });
        total = 0
    }
    return result;
};

const parseResultArray = data => {
    const namespace = {};
    const result = [];
    let total = 0;
    data.forEach(row => {
        if (!namespace.hasOwnProperty(row.NOME_VENDEDOR)) {
            namespace[row.NOME_VENDEDOR] = {
                NOME_VENDEDOR: row.NOME_VENDEDOR,
                VALOR: [row.VALOR],
            };
        } else {
            namespace[row.NOME_VENDEDOR].VALOR.push(row.VALOR);
        }
    });
    for (let id in namespace) {
        for (let i = 0; i < namespace[id].VALOR.length; i++) {
            total += parseFloat(namespace[id].VALOR[i])
        }
        result.push({
            NOME_VENDEDOR: namespace[id].NOME_VENDEDOR,
            VALOR: 'R$ ' + total.toFixed(2),
        });
        total = 0
    }
    return result;
};

module.exports = {
    parseResult,
    parseResultArray
}