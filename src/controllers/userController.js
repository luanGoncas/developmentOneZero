const Router = require('koa-router');
const {createUser, getUser, getUsers, updateUser, deleteUser} = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/api/users.api.js');

const router = new Router({
    prefix:'/users'
});

router.get('/users', async (ctx) => {
    ctx.body = await getUsers();
});

router.post('/users', async (ctx) => {
    let user = ctx.request.body;
    user = await createUser(user);
    ctx.response.status = 200;
    ctx.body = user;
});

router.get('/users:id', async (ctx) => {
    const id = ctx.params.id;
    let user = ctx.request.body;
    user = await updateUser(user);
    ctx.response.status = 200;
    ctx.body = user;
});

module.exports = router;