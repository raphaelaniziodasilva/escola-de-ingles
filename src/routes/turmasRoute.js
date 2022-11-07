const {Router} = require("express")
const TurmaController = require("../controllers/TurmaController")

const router = Router()

router
.get("/turmas", TurmaController.pegaTodasAsTurmas)
 .get("/turmas/:id", TurmaController.pegarUmaTurma)
 .post("/turmas", TurmaController.criaTurma)
 .put("/turmas/:id", TurmaController.atualizarTurma)
 .delete("/turmas/:id", TurmaController.deletarTurma)

 // restaura
 .post('/turmas/:id/restaura', TurmaController.restauraTurma)

// exportando o router para usar no servidor
module.exports = router
