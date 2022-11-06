// importando o bodyParser para converter os dados que vai para o body das requisições para json
const bodyParser = require("body-parser")

// importando a rota de pessoasRoute
const pessoas = require("./pessoasRoute")
// importando a rota de turmaRoute
const turmas = require("./turmasRoute")
// importando a rota de niveisRoute
const niveis = require("./niveisRoute")


module.exports = app => {
    // pegando os dados que vai chegar da requisição e convertendo para json
    app.use(
     bodyParser.json(),
     // usando as rotas
     pessoas,
     turmas,
     niveis
    )
}