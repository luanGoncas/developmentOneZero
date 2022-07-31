const {getAll, getById, removeById, save, update} = require('src/database/user.dao.js');

const createUser = async ({nome, email, idade}) => {
    const user = {
        nome,
        email,
        idade
    };
    return await save(user);
};

const getUsers = async () => {
    return await getAll();
};

const getUser = async id => {
    return await getById(id);
};

const deleteUser = async id => {
    return await removeById(id);
};

const updateUser = async (id, {nome, email, idade}) => {
    return await update(id, {nome, email, idade});
};

module.exports = {
    createUser,
    getUsers,
    getUser,
    deleteUser,
    updateUser,
};