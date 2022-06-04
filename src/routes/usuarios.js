var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrar_pagamento", function (req, res) {
    usuarioController.cadastrar_pagamento(req, res);
})

router.post("/cadastrar_pagamento_pix", function (req, res) {
    usuarioController.cadastrar_pagamento_pix(req, res);
})

router.post("/cadastrar_pagamento_boleto", function (req, res) {
    usuarioController.cadastrar_pagamento_boleto(req, res);
})

router.post("/cadastrar_itens_compra", function (req, res) {
    usuarioController.cadastrar_itens_compra(req, res);
})


router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

module.exports = router;