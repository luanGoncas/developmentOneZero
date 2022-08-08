// Importação dos métodos do usuário, especificados no arquivo 'user.dao.js'
const {getAll, getById, removeById, save, update} = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/database/user.dao.js');
//const {getAll, getById, getByName, removeById, save, update} = require('/home/luan/Documentos/Codigos/developmentOneZero-projecttest-903563a643f6/src/database/user.dao.js');

// Cria um novo usuário e com os atributos especificados
// O método save faz isso
// const createUser = async ({nome, email, idade}) => {
//     const user = {
//         title: "Schema do Usuario, define como é o usuario, linha 24 do teste",
//         type: "object",
//         required: ['nome', 'email', 'idade'],
//         properties: {
//             nome: {
//                 type: 'string'
//             },
//             email: {
//                 type: 'string'
//             },
//             idade: {
//                 type: 'number',
//                 minimum: 18
//             }
//         }
//     }
//     return await save(user);
// }
const createUser = async ({nome, email, idade}) => {
    const user = {
        nome,
        email,
        idade
    };
    return await save(user);
};

// Método que lista todos os usuários presentes no banco de dados através do getAll()
const getUsers = async () => {
    return await getAll();
};

// Método que informa um único usuário através do seu ID
const getUser = async id => {
    return await getById(id);
};

// Método que informa um único usuário através do seu nome
// const getUserName = async (id, {nome, email, idade}) => {
//     return await getByName(nome);
// };



// Método que remove um usuário através de seu ID
const deleteUser = async id => {
    return await removeById(id);
};

// Método que modifica um usuário baseado no seu ID
const updateUser = async (id, {nome, email, idade}) => {
    return await update(id, {nome, email, idade});
};

// Padrão do NodeJS para pegar seus métodos
module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser
};

// Padrão do NodeJS para pegar seus métodos
// module.exports = {
//     createUser,
//     getUsers,
//     getUser,
//     getUserName,
//     deleteUser,
//     updateUser
// };