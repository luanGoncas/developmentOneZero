//Voce deve rodar os testes usando:  npm test
//Para testar a aplicação, rode: npm run dev

//mais infos
//https://github.com/ZijianHe/koa-router

const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const userRoutes = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/controllers/userController.js');
const app = new Koa();

app.use(bodyParser());
app.use(userRoutes.routes()).use(userRoutes.allowedMethods());

app.use(ctx => {
  ctx.body = "TESTE DO INFERNO";
});

app.listen(3000);
console.log("APPLICATION IS RUNNING ON PORT 3000");

// todas as configuraçoes devem ser passadas via environment variables
// const PORT = process.env.PORT || 3000;
// const Koa = require('koa');
// const bodyParser = require('koa-bodyparser');
// const userRoutes = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/controllers/userController.js');
// const Router = require('koa-router');
// var router = new Router();
// const koa = new Koa();

// router.get('/', async (ctx) => {
//   ctx.body = `Seu servidor esta rodando em http://localhost:${PORT}`; //http://localhost:3000/
// });

// router.get('/users', async (ctx) => {
//   ctx.status = 200;
//   ctx.body = {total:0, count: 0, rows:[]}
// });

// koa
//   .use(bodyParser())
//   .use(userRoutes.routes())
//   .use(userRoutes.allowedMethods());

// const server = koa.listen(PORT);
// module.exports = server;