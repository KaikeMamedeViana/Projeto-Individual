var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar(nome, sobrenome, telefone, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    var instrucao = `
        INSERT INTO usuario (nome, sobrenome, telefone, email, senha) VALUES ('${nome}','${sobrenome}', '${telefone}', '${email}', '${senha}' );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pagamento(rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, totalCompra, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_pagamento():", rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, totalCompra, fkUsuario);
    var instrucao = `
        INSERT INTO pagamento (rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, totalCompra, fkUsuario) VALUES ('${rua}','${estado}', 
        '${cidade}', '${cep}', '${metodo}', '${validade}', '${codigo}', '${nome}', '${numero}', ${totalCompra}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pagamento_pix(rua, estado, cidade, cep, metodo, totalCompra, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_pagamento_pix():", rua, estado, cidade, cep, metodo, totalCompra, fkUsuario);
    var instrucao = `
        INSERT INTO pagamento (rua, estado, cidade, cep, metodo, totalCompra, fkUsuario) VALUES ('${rua}','${estado}', 
        '${cidade}', '${cep}', '${metodo}', ${totalCompra}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pagamento_boleto(rua, estado, cidade, cep, metodo, totalCompra, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_pagamento_pix():", rua, estado, cidade, cep, metodo, totalCompra, fkUsuario);
    var instrucao = `
        INSERT INTO pagamento (rua, estado, cidade, cep, metodo, totalCompra, fkUsuario) VALUES ('${rua}','${estado}', 
        '${cidade}', '${cep}', '${metodo}', ${totalCompra}, ${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}



function cadastrar_itens_compra(item_desc, item_valor, caminho_foto, id_comprado) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_itens_compra:", item_desc, item_valor, caminho_foto, id_comprado);
    var instrucao = `
        INSERT INTO itens_compra (item_desc, item_valor, caminho_foto, id_comprado) VALUES ('${item_desc}',
         '${item_valor}', '${id_comprado}', ${caminho_foto} );
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}







module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrar_pagamento,
    cadastrar_pagamento_pix,
    cadastrar_pagamento_boleto,
    cadastrar_itens_compra
};