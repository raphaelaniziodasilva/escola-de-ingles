Vamos começar o projeto
npm init -y   

Instalando as dependencias de produção e de desenvolvimento
npm install express 
npm install body-parser
npm install --save-dev nodemon
npm install mysql2 
npm install sequelize sequelize-cli path

Criar um projeto vazio, com algumas pastas pre montadas e configuradas
npx sequelize-cli init

Precisamos criar um arquivo .sequelizerc que vai ajudar o sequelize na busca das pastas. Avisando para o sequelize os caminhos das pastas para ele não ficar perdido

Vamos criar os modelos baseado em tabelas o sequelize vai escrever essas tabelas e modelos a gente so vai precisar passar algumas informações pro sequelize 

Vamos usar o comando sequelize-cli direto no terminal

A gente vai passar pro sequelize o nome do modelo que vai ser criado baseado na tabela e os atributos com o tipo de dado. Com isso vai ser gerado um model pessoas.js e também sera criado a migration pessoas

npx sequelize-cli model:create --name Pessoas --attributes nome:string,ativo:boolean,email:string,role:string

Migrações de dados: transferencia de dados entre plataformas 

Com o models da tabela e a migrations já estão criados agora vamos usar o sequelize para fazer as migrações do banco ou seja vamos criar as tabelas no banco

Vamos usar o comando npx sequelize-cli db:migrate

Desfazendo migration
para criar outra migration nova. Voltarmos o banco a um estado anterior à última alteração.
npx sequelize-cli db:migrate:undo

Este comando vai desfazer somente a última migração feita, na ordem em que os arquivos são lidos e executados pelo Sequelize (de acordo com as datas e horários no nome dos arquivos).

Para desfazer uma migração específica de um arquivo especifico
db:migrate:undo --name [data-hora]-create-[nome-da-tabela].js


Vamos popular o banco usando o seeders que esta disponivel no sequelize-cli. Criando um arquivo de seeders pelo terminal
Lembrando que sempre temos que criar os seeds em ordem porque eles vão rodar em ordem

Vamos usar o comando npx sequelize-cli seed:generate --name demo-pessoa

Com o seeders configurado e pronto agora vamos rodar o comando de seed para o sequelize se conectar com o banco e enviar os dados do seeders para o banco

Vamos usar o comando npx sequelize-cli db:seed:all

Desfazendo seeds
Os seeds servem para termos dados iniciais no banco, normalmente dados de exemplo e/ou para teste. Quando você quiser desfazer essa operação para limpar esses dados do banco, pode rodar o comando

Para desfazer o último seed feito.
npx sequelize db:seed:undo

Para desfazer seeds de uma tabela específica.
npx sequelize-cli db:seed:undo --seed nome-do-arquivo

Para desfazer todos os seeds feitos.
npx sequelize-cli db:seed:undo:all