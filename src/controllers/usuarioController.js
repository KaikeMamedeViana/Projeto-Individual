var usuarioModel = require("../models/usuarioModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA usuarioController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function listar(req, res) {
    usuarioModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

function entrar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {
        
        usuarioModel.entrar(email, senha)
            .then(
                function (resultado) {
                    console.log(`\nResultados encontrados: ${resultado.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultado)}`); // transforma JSON em String

                    if (resultado.length == 1) {
                        console.log(resultado);
                        res.json(resultado[0]);
                    } else if (resultado.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var telefone = req.body.telefoneServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else {
        
        usuarioModel.cadastrar(nome, sobrenome, telefone, email, senha)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar_pagamento(req, res) {
    var rua = req.body.ruaServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var cep = req.body.cepServer;
    var metodo = req.body.metodoServer;
    var validade = req.body.validadeServer;
    var codigo = req.body.codigoServer;
    var nome = req.body.nomeServer;
    var numero = req.body.numeroServer;
    var fkUsuario = req.body.idServer;


    

    if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (metodo == undefined) {
        res.status(400).send("Seu metodo está undefined!");
    }else if (validade == undefined) {
        res.status(400).send("Sua validade está undefined!");
    } else if (codigo == undefined) {
        res.status(400).send("Seu codigo está undefined!");
    } else if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (numero == undefined) {
        res.status(400).send("Seu numero está undefined!");
    }
     else {
        
        usuarioModel.cadastrar_pagamento(rua, estado, cidade, cep, metodo, validade, codigo, nome, numero, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar_pagamento_pix(req, res) {
    var rua = req.body.ruaServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var cep = req.body.cepServer;
    var metodo = req.body.metodoServer;
    var fkUsuario = req.body.idServer;

    

    if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (metodo == undefined) {
        res.status(400).send("Seu metodo está undefined!");
    } else {
        
        usuarioModel.cadastrar_pagamento_pix(rua, estado, cidade, cep, metodo, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                    console.log(resultado + "resultado")
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function cadastrar_pagamento_boleto(req, res) {
    var rua = req.body.ruaServer;
    var estado = req.body.estadoServer;
    var cidade = req.body.cidadeServer;
    var cep = req.body.cepServer;
    var metodo = req.body.metodoServer;
    var fkUsuario = req.body.idServer;


    

    if (rua == undefined) {
        res.status(400).send("Sua rua está undefined!");
    } else if (estado == undefined) {
        res.status(400).send("Seu estado está undefined!");
    } else if (cidade == undefined) {
        res.status(400).send("Sua cidade está undefined!");
    } else if (cep == undefined) {
        res.status(400).send("Seu cep está undefined!");
    } else if (metodo == undefined) {
        res.status(400).send("Seu metodo está undefined!");
    } else {
        
        usuarioModel.cadastrar_pagamento_boleto(rua, estado, cidade, cep, metodo, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}










module.exports = {
    entrar,
    cadastrar,
    listar,
    testar,
    cadastrar_pagamento,
    cadastrar_pagamento_pix,
    cadastrar_pagamento_boleto
}