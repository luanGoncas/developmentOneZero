const Router = require('koa-router');
const {createUser, getUser, getUsers, updateUser, deleteUser} = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/api/users.api.js');

const router = new Router({
    prefix: '/users'
});

router.get('/', async (ctx) => {
    ctx.body = await getUsers();
});

router.post('/', async (ctx) => {
    let user = ctx.request.body;
    user = await createUser(user);
    ctx.response.status = 200;
    ctx.body = user;
});

router.get('/:id', async (ctx) => {
    const id = ctx.params.id;
    ctx.body = await getUser(id);
});

router.delete('/:id', async (ctx) => {
    const id = ctx.params.id;
    await deleteUser(id);
});

router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let user = ctx.request.body;
    user = await updateUser(id, user);
    ctx.response.status = 200;
    ctx.body = user;
});

module.exports = router;