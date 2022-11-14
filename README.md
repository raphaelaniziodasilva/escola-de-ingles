# Projeto Escola de inglês
<p>
Neste Projeto foi feito API para um sistema de controle de alunos e turmas de uma escola de inglês
</p>

## 🛠 Tecnologias utilizadas
As seguintes ferramentas foram usadas na construção do projeto:
<br><br>

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="jacascript logo" />                       
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" height="40" width="52" alt="nodejs logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" height="40" width="52" alt="mysql logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" width="52" alt="express logo"/>
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg" height="40" width="52" alt="sequelize logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" height="40" width="52" alt="npm logo" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" width="52" alt="Jest logo" /> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo"  />
</div>

## Como instalar a API:
1. Clonar o repositório
2. Instalar as dependências de desenvolvimento e produção `npm install-y` 
3. Migrações o banco de dados: transferencia de dados entre plataformas `npx sequelize-cli db:migrate`
4. Popular o banco com o seeders `npx sequelize-cli db:seed:all`
5. Para rodar o servidor `npm run start`

### :file_folder: Funcionalidades da API
### Pessoas
- Get/Listar todas as pessoas
- Get/Listar uma pessoa
- Post/Criar pessoa
- Post/Restaura pessoa
- Put/Atualizar pessoa
- Delete/Deleta pessoa

### Turmas
- Get/Listar todas as turmas
- Get/Lista uma turma
- Get/Listando as turmas por intervalo de data
- Post/Criar turma
- Post/Restaura turma
- Put/Atualizar turma
- Delete/Deleta turma

### Niveis
- Get/Listar todos os niveis
- Get/Listar um nivel
- Post/Criar nivel
- Post/Restaura nivel
- Put/Atualizar nivel
- Delete/Deleta nivel

## Matrículas
- Get/Listar todas as matriculas de uma pessoa
- Get/Listar uma matricula
- Get/Contando matriculas por turma por pessoa
- Post/Criar matricula
- Post/Restaura matricula
- Post/Cancelando todas as matricula de um estudante
- Put/Atualizar matricula
- Delete/Deleta matricula
