const {Router} = require("express")
const TurmaController = require("../controllers/TurmaController")

const router = Router()

router
 .get("/turmas", TurmaController.pegaTodasAsTurmas)
 .get("/turmas/:id", TurmaController.pegarUmaTurma)
 .post("/turmas", TurmaController.criaTurma)
 .put("/turmas/:id", TurmaController.atualizarTurma)
 .delete("/turmas/:id", TurmaController.deletarTurma)

 // restaura id que foi ocultado
 .post('/turmas/:id/restaura', TurmaController.restauraTurma)

 // listando as turmas por intervalo de data
 .get("/turmas", TurmaController.listandoTurmasPorIntervaloDeDatas)

// exportando o router para usar no servidor
module.exports = router
