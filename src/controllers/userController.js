// Importação do objeto do Koa para a escrita em servidor
const Router = require('koa-router');

// Importação dos métodos da API
const {createUser, getUser, getUsers, updateUser, deleteUser} = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/api/users.api.js');
//const {createUser, getUser, getUserName, getUsers, updateUser, deleteUser} = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/api/users.api.js');

// Definição do prefixo da API
const router = new Router({
    prefix: '/users'
});

// Requisição GET para listagem de todos os usuários
router.get('/', async (ctx) => {
    ctx.body = {
        rows: await getUsers()
    }
});

// Requisição POST para a adição de um novo usuário
router.post('/', async (ctx) => {
    // Especificação dos atributos do usuário
    let user = ctx.request.body;
    user = await createUser(user);

    // Relato de requisição bem sucedida
    ctx.response.status = 201;
    ctx.body = user;
});

// Requisição GET para consulta de um usuário específico
// Acompanhado do ID para a referência do usuário correto
router.get('/:id', async (ctx) => {
    // TRECHOS DE TRATAMENTO DE ERRO QUE NÃO FUNCIONARAM
    // const id = ctx.params.id;
    // let user = null;
    // try {
    //     user = await getUser(id);
    // } catch (error) {
    //     ctx.body = 'User not found';
    //     user = null;
    // }
    // if (!user) {
    //     ctx.body = 'User not found';
    // }
    // console.log(user);
    // ctx.body = user;
    const id = ctx.params.id;
    ctx.body = await getUser(id);
});

// Requisição GET para consulta de um usuário específico
// Acompanhado do nome para a referência do usuário correto
// router.get('/:nome', async (ctx) => {
//     const name = ctx.params.nome;
//     ctx.body = await getUserName(name);
// });

// Requisição DELETE para a remoção de um usuário
// Acompanhado do ID para a referência do usuário correto
router.delete('/:id', async (ctx) => {
    const id = ctx.params.id;
    await deleteUser(id);
});

// Requisição PUT para a modificação de um usuário
// Acompanhado do ID para a referência do usuário correto
router.put('/:id', async ctx => {
    const id = ctx.params.id;
    let user = ctx.request.body;
    user = await updateUser(id, user);
    ctx.response.status = 200;
    ctx.body = user;
});

// Padrão do NodeJS para a especificação das rotas
module.exports = router;