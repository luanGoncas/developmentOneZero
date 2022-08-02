// DAO - Data Acess Object. Especificação dos métodos e atributos do usuário
// As operações são relativas ao CRUD
// C - Create, R - Read, U - Update, D - Delete

// Constante que faz o require do banco de dados MongoDB com a especificação da coletânea
const users = require('./index').db('store').collection('users');

// Constante do tipo ObjectID para especificar um identificador para o dado do usuário
// Ele é definido no momento que um novo usuário for criado
const UserID = require('mongodb').ObjectId;

// C - Create
// Método que cria um objeto do tipo Usuário com os atributos nome, email, e idade
const save = async ({nome, email, idade}) => {
    const result = await users.insertOne({nome, email, idade});
    return result.ops[0];
};

// R - Read
// Método que informa todos os usuários armazenados no banco de dados
const getAll = async () => {
    const cursor = await users.find();
    return cursor.toArray();
};

// R - Read
// Método que informa um único usuário armazenado no banco de dados através de seu ID
const getById = async (id) => {
    return await users.findOne({_id:UserID(id)});
};

// U - Update
// Método que modificar os atributos de um usuário
// O ID é usado para referenciar qual usuário será modificado
const update = async (id, {nome, email, idade}) => {
    const result = await users.replaceOne({_id:UserID(id)}, {nome, email, idade});
    return result.ops[0];
};

// R - Remove
// Método para remover um usuário do banco de dados
// O ID é usado para referenciar qual usuário será removido
const removeById = async id => {
    await users.deleteOne({_id:UserID(id)});
};

// Padrão do NodeJS para pegar os métodos do objeto Usuário
module.exports = {getAll, getById, removeById, save, update};