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

function cadastrar_pagamento(rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_pagamento():", rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, fkUsuario);
    var instrucao = `
        INSERT INTO pagamento (rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, fkUsuario) VALUES ('${rua}','${estado}', 
        '${cidade}', '${cep}', '${metodo}', '${validade}', '${codigo}', '${nome}', '${numero}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pagamento_pix(rua, estado, cidade, cep, metodo, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_pagamento_pix():", rua, estado, cidade, cep, metodo, fkUsuario);
    var instrucao = `
        INSERT INTO pagamento (rua, estado, cidade, cep, metodo, fkUsuario) VALUES ('${rua}','${estado}', 
        '${cidade}', '${cep}', '${metodo}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function cadastrar_pagamento_boleto(rua, estado, cidade, cep, metodo, fkUsuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_pagamento_pix():", rua, estado, cidade, cep, metodo, fkUsuario);
    var instrucao = `
        INSERT INTO pagamento (rua, estado, cidade, cep, metodo, fkUsuario) VALUES ('${rua}','${estado}', 
        '${cidade}', '${cep}', '${metodo}', '${fkUsuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


function cadastrar_itens_compra(item_desc, item_valor, fkPagamento) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar_itens_compra:", item_desc, item_valor, fkPagamento);
    var instrucao = `
        INSERT INTO itens_compra (item_desc, item_valor, fkPagamento) VALUES ?
    `;
    var values = localStorage.carrinho



    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao, [values]);
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