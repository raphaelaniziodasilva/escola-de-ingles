const {Router} = require("express")
const NivelController = require("../controllers/NivelController")

const router = Router()

router
 .get("/niveis", NivelController.pegarTodosNiveis)
 .get("/niveis/:id", NivelController.pegarUmNivel)
 .post("/niveis", NivelController.criaNivel)
 .put("/niveis/:id", NivelController.atualizarNivel)
 .delete('/niveis/:id', NivelController.deletarNivel)

 // restaura id que foi ocultado
 .post('/niveis/:id/restaura', NivelController.restauraNivel)

module.exports = router