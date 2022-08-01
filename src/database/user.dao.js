const users = require('./index').db('store').collection('users');
const UserID = require('mongodb').ObjectId;

const save = async ({nome, email, idade}) => {
    const result = await users.insertOne({nome, email, idade});
    return result.ops[0];
};

const getAll = async () => {
    const cursor = await users.find();
    return cursor.toArray();
};

const getById = async (id) => {
    return await users.findOne({_id:UserID(id)});
};

const update = async (id, {nome, email, idade}) => {
    const result = await users.replaceOne({_id:UserID(id)}, {nome, email, idade});
    return result.ops[0];
};

const removeById = async id => {
    await users.deleteOne({_id:UserID(id)});
};

module.exports = {getAll, getById, removeById, save, update};