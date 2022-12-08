# APi Escola de inglês

## Resumo do projeto

Projeto de API REST para prática de JavaScript.
Neste Projeto foi feito API para um sistema de controle de alunos e turmas de uma escola de inglês.
Escola de inglês com sistema de cadastro e manejo de pessoas, matriculas, turmas e niveis.


## 🛠 Stack utilizada
As seguintes stacks foram usadas na construção do projeto:
<br><br>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="jacascript logo" />                       
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="52" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo"  />
</div>

## Instalação
1. Clonar o repositório, após clonar o repositório criar um arquivo .env e alterar credenciais do banco de dados, baseado no arquivo .env.example
2. Instalar as dependências de desenvolvimento e produção `npm install i` 
3. Migrações o banco de dados: transferencia de dados entre plataformas `npx sequelize-cli db:migrate`
4. Popular o banco com o seeders `npx sequelize-cli db:seed:all`
5. Para rodar o servidor `npm run start`

Este projeto já conta com o código necessário para subir a API em um servidor:

```
├── package.json
├── package-lock.json
├── README.md
├── .env
├── .env.example
├── .sequelizerc
├── src
│   ├── index.js
│   ├── controllers
│   │   └── NivelController.js
│   │   └── PessoaController.js
│   │   └── TurmaController.js
│   ├── config
│   │   ├── config.js
│   ├── migrations
│   │   └── 20221102145027-create-pessoas.js
│   │   └── 20221104005926-create-niveis.js
│   │   └── 20221104010713-create-turmas.js
│   │   └── 20221104010854-create-matriculas.js
│   │   └── 20221107151017-addcolumn-matriculas.js 
│   │   └── 20221107151017-addcolumn-niveis.js
│   │   └── 20221107151017-addcolumn-pessoas.js
│   │   └── 20221107151017-addcolumn-turmas.js 
│   ├── models
│   │   └── index.js
│   │   └── matriculas.js
│   │   └── niveis.js
│   │   └── pessoas.js
│   │   └── turmas.js
│   ├── routes
│   │   └── index.js
│   │   └── niveisRoute.js
│   │   └── pessoasRoute.js
│   │   └── turmasRoute.js
│   ├── seeders
│   │    └── 20221102162007-demo-pessoa.js
│   │    └── 20221105202550-demo-nivel.js
│   │    └── 20221105202631-demo-turmas.js
│   │    └── 20221105202704-demo-matriculas.js
```
### Endpoints
A API expõe os seguintes *endpoints* a partir da *base URL* `localhost:3000`:
### Pessoas
* `Get/Listar todas as pessoas`
* `Get/Listar uma pessoa`
* `Post/Criar pessoa`
* `Post/Restaura pessoa`
* `Put/Atualizar pessoa`
* `Delete/Deleta pessoa`

### Turmas
* `Get/Listar todas as turmas`
* `Get/Lista uma turma`
* `Get/Listando as turmas por intervalo de data`
* `Post/Criar turma`
* `Post/Restaura turma`
* `Put/Atualizar turma`
* `Delete/Deleta turma`

### Niveis
* `Get/Listar todos os niveis`
* `Get/Listar um nivel`
* `Post/Criar nivel`
* `Post/Restaura nivel`
* `Put/Atualizar nivel`
* `Delete/Deleta nivel`

### Matrículas
* `Get t/Listar todas as matriculas de uma pessoa`
* `Get/Listar uma matricula`
* `Get/Contando matriculas por turma por pessoa`
* `Post/Criar matricula`
* `Post/Restaura matricula`
* `Post/Cancelando todas as matricula de um estudante`
* `Put/Atualizar matricula`
* `Delete/Deleta matricula`

## Documentação Postman
</p>
<p align="center">
<a href="https://documenter.getpostman.com/view/21643838/2s8YmF1STn" target="_blank"><img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-ar21.svg"  height="170" width="202" alt="Run in Postman"></a>
</p>
