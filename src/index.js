//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router
// todas as configuraçoes devem ser passadas via environment variables

// TODAS AS VARIÁVEIS DE AMBIENTE: Koa, bodyParser, userRoutes, app e PORT

// Importação do KoaJS para trabalhar com o servidor
const Koa = require('koa');

// Importação do BodyParser para a análise sintática dos dados recebidos da requisição
const bodyParser = require('koa-bodyparser');

// Importação das rotas dos usuários
const userRoutes = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/controllers/userController.js');

// Inicializa a aplicação através do Koa
const app = new Koa();

// Variável fixa para a porta do servidor
// Isso é feito para que não seja necessário especificar o número da porta em toda chamada
// A porta escolhida aqui é o localhost:3000
const PORT = process.env.PORT || 3000;

// Utilização do BodyParser
app.use(bodyParser());

// Registro das rotas dos usuários
app.use(userRoutes.routes()).use(userRoutes.allowedMethods());

// Teste para informar se a porta configurada está funcionando
app.use(ctx => {
  ctx.body = "A porta está funcionando";
});

// Utiliza a variável fixa para a configuração da porta utilizada
const server = app.listen(PORT);
module.exports = server;

// Informa no console que a aplicação está funcionando
console.log("APPLICATION IS RUNNING ON PORT 3000");