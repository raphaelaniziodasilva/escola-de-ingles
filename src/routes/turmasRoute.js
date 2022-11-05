const {Router} = require("express")
const TurmaController = require("../controllers/TurmaController")

const router = Router()

router.get("/turmas", TurmaController.pegaTodasAsTurmas)
router.get("/turmas/:id", TurmaController.pegarUmaTurma)
router.post("/turmas", TurmaController.criaTurma)
router.put("/turmas/:id", TurmaController.atualizarTurma)
router.delete("/turmas/:id", TurmaController.deletarTurma)


// exportando o router para usar no servidor
module.exports = router
