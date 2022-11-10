// importando o Router do express para ter acesso aos metodos HTTP
const {Router} = require("express")

// importando PessoaController para poder usar os metodos para gerenciar as rotas de pessoas
const PessoaController = require("../controllers/PessoaController")

// iniciando a router
const router = Router()

// utilizando os metodos HTTP Pessoas
router
 .get("/pessoas", PessoaController.pegarTodasAsPessoas)
 .get("/pessoas/:id", PessoaController.pegaUmaPessoa)
 .post("/pessoas", PessoaController.criaPessoa)
 .put("/pessoas/:id", PessoaController.atualizaPessoa)
 .delete("/pessoas/:id", PessoaController.deletaPessoa)

 // restauração
 .post("/pessoas/:id/restaura", PessoaController.restauraPessoa)
 .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)


 // Matriculas
 .get("/pessoas/:estudanteId/matriculas", PessoaController.listaMatriculas)
 .get("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.pegaUmaMatricula)
 .post("/pessoas/:estudanteId/matricula", PessoaController.criaMatricula)
 .put("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.atualizaMatricula)
 .delete("/pessoas/:estudanteId/matriculas/:matriculaId", PessoaController.deletaMatricula)


// exportando o router para usar no servidor
module.exports = router