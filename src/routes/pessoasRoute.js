// importando o Router do express para ter acesso aos metodos HTTP
const {Router} = require("express")

// importando PessoaController para poder usar os metodos para gerenciar as rotas de pessoas
const PessoaController = require("../controllers/PessoaController")

// iniciando a router
const router = Router()

// utilizando os metodos HTTP
router.get("/pessoas", PessoaController.pegarTodasAsPessoas)

// exportando o router para usar no servidor
module.exports = router