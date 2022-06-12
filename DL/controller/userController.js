require('../db').connect()
const { userModel } = require('../models/user')


async function create(data) {
    const res = await userModel.create(data)
    console.log(res);
    // return (res)
}
async function read(filter) {
    const res = await userModel.find(filter)
    console.log(res)
    // return (res)

}
async function update(filter, newData) {
    const res = await userModel.updateOne(filter, newData)
    console.log(res);
    // return (res)


}
async function del(filter) {
    await update(filter, { isActive: false })
    // const res = await userModel.deleteOne(filter)
    // console.log(res);
    // return (res)


}

module.exports = { create, read, update, del }

let user1 = {
    firstName: "Renana",
    lastName: "Bagizada",
    email: "Rbadsfsdfdg@gmail.com",
    password: "5678",
    gender: 'Female',
    address: {
        street: "dvash",
        homeNum: 10,
        city: "Jerusalem"
    }
}

update({ firstName: "Liran" }, { firstName: "Shira" })
