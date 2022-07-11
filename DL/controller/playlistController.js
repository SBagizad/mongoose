//require('../db').connect()


const { playlistModel } = require('../models/item')


async function create(data) {
    return await playlistModel.create(data)

}

async function read(filter, proj) {
    return await playlistModel.find(filter, proj);
    // const res = await itemModel.find(filter)
    // console.log(res)
}

async function readOne(filter, proj) {
    return await playlistModel.findOne(filter, proj);
}

async function update(filter, newData) {
    return await playlistModel.updateOne(filter, newData)
    // const res = await itemModel.updateOne(filter, newData)
    // console.log(res);
}


async function del(filter) {
    return await update(filter, { isActive: false })
    // const res = await userModel.deleteOne(filter)
    // console.log(res);
}

module.exports = { create, read, update, del }

