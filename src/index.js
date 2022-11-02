// subindo o servidor local pro express

// importando o express para subir o servidor local e gerenciar as rotas
const express = require("express")
// importando o bodyParser para converter os dados que vai para o body das requisições para json
const bodyParser = require("body-parser")

// iniciando o express
const app = express()

// pegando os dados que vai chegar da requisição e convertendo para json
app.use(bodyParser.json())

// porta do servidor local 
const port = 3000

// rota de teste
app.get("/teste", (req, res) => res
    .status(200)
    .send({mensagem: "Boas vindas à API!"})
)

// pedindo para o express verificar ouvir o servidor
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

// exportando o app para poder usar em outras partes da aplicação
module.exports = app
