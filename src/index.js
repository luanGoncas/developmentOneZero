//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router
// todas as configuraçoes devem ser passadas via environment variables
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const userRoutes = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/controllers/userController.js');
const app = new Koa();
const PORT = process.env.PORT || 3000;

app.use(bodyParser());
app.use(userRoutes.routes()).use(userRoutes.allowedMethods());
app.use(ctx => {
  ctx.body = "A porta está funcionando";
});

const server = app.listen(PORT);
module.exports = server;
console.log("APPLICATION IS RUNNING ON PORT 3000");