require('../db').connect()


const { itemModel } = require('../models/item')


async function create(data) {
    return await itemModel.create(data)

    // const res = await itemModel.create(data)
    // console.log(res);
}
async function read(filter, proj) {
    return await itemModel.find(filter, proj);
    // const res = await itemModel.find(filter)
    // console.log(res)
}

async function readOne(filter, proj) {
    return await itemModel.findOne(filter, proj);
}

async function update(filter, newData) {
    return await itemModel.updateOne(filter, newData)
    // const res = await itemModel.updateOne(filter, newData)
    // console.log(res);
}


async function del(filter) {
    return await update(filter, { isActive: false })
    // const res = await userModel.deleteOne(filter)
    // console.log(res);
}

module.exports = { create, read, update, del }

