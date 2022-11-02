// subindo o servidor local pro express
// importando o express para subir o servidor local e gerenciar as rotas
const express = require("express")

// importando as rotas
const routes = require("./routes")

// iniciando o express
const app = express()

// usando as rotas
routes(app)

// porta do servidor local 
const port = 3000

// pedindo para o express verificar ouvir o servidor
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

// exportando o app para poder usar em outras partes da aplicação
module.exports = app
