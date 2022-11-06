// importando o Router do express para ter acesso aos metodos HTTP
const {Router} = require("express")

// importando PessoaController para poder usar os metodos para gerenciar as rotas de pessoas
const PessoaController = require("../controllers/PessoaController")

// iniciando a router
const router = Router()

// utilizando os metodos HTTP
router.get("/pessoas", PessoaController.pegarTodasAsPessoas)
router.get("/pessoas/:id", PessoaController.pegaUmaPessoa)
router.post("/pessoas", PessoaController.criaPessoa)
router.put("/pessoas/:id", PessoaController.atualizaPessoa)
router.delete("/pessoas/:id", PessoaController.deletaPessoa)

router.get("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.pegaUmaMatricula)
router.post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
router.put("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.atualizaMatricula)
router.delete("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.deletaMatricula)


// exportando o router para usar no servidor
module.exports = router