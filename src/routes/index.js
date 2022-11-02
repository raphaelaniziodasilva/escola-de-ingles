// importando o bodyParser para converter os dados que vai para o body das requisições para json
const bodyParser = require("body-parser")

module.exports = app => {
    // pegando os dados que vai chegar da requisição e convertendo para json
    app.use(bodyParser.json())
    app.get("/", (req, res) => res.send("Ola"))
    
}