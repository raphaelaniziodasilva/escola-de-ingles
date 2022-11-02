// importando o bodyParser para converter os dados que vai para o body das requisições para json
const bodyParser = require("body-parser")

// importando a rota de pessoasRoute
const pessoas = require("./pessoasRoute")

module.exports = app => {
    // pegando os dados que vai chegar da requisição e convertendo para json
    app.use(bodyParser.json())

    // usando as rotas
    app.use(pessoas)

}