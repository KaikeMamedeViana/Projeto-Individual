var express = require("express");
var router = express.Router();

var avisoController = require("../controllers/avisoController");

router.get("/", function (req, res) {
    avisoController.testar(req, res);
});


router.get("/listarAnzois", function (req, res) {
    avisoController.listarAnzois(req, res);
});

router.get("/listarVaras", function (req, res) {
    avisoController.listarVaras(req, res);
});

router.get("/listarLinhas", function (req, res) {
    avisoController.listarLinhas(req, res);
});

router.get("/listarCarretilha", function (req, res) {
    avisoController.listarCarretilha(req, res);
});

router.get("/listarIscas", function (req, res) {
    avisoController.listarIscas(req, res);
});


router.get("/listarVendidos", function (req, res) {
    avisoController.listarVendidos(req, res);
});

router.get("/listar", function (req, res) {
    avisoController.listar(req, res);
});

router.get("/listar/:idUsuario", function (req, res) {
    avisoController.listarPorUsuario(req, res);
});

router.get("/pesquisar/:descricao", function (req, res) {
    avisoController.pesquisarDescricao(req, res);
});

router.post("/publicar/:idUsuario", function (req, res) {
    avisoController.publicar(req, res);
});

router.put("/editar/:idAviso", function (req, res) {
    avisoController.editar(req, res);
});

router.delete("/deletar/:idAviso", function (req, res) {
    avisoController.deletar(req, res);
});

module.exports = router;