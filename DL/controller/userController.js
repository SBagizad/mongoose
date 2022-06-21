const { userModel } = require('../models/user')

async function create(data) {
    return await userModel.create(data);
}
async function read(filter, proj) {
    return await userModel.find(filter, proj);
}

async function readOne(filter, proj) {
    return await userModel.findOne(filter, proj);
}
async function update(filter, newData) {
    return await userModel.updateOne(filter, newData);
}
async function del(filter) {
    return await update(filter, { isActive: false })
}

module.exports = { create, read, readOne, update, del }