require('../db').connect()
const { SchemaTypes, default: mongoose } = require('mongoose');
const { orderModel } = require('../models/order')


async function create(data) {
    return await orderModel.create(data)
    // const res = await orderModel.create(data)
    // console.log(res);
}
async function read(filter, proj) {
    return await orderModel.find(filter, proj)
        .populate('userId')
        .populate('items.itemId')
    // console.log(res[0].items);
}

async function update(filter, newData) {
    return await orderModel.updateOne(filter, newData)
    // const res = await orderModel.updateOne(filter, newData)
    // console.log(res);


}

module.exports = { create, read, update }

