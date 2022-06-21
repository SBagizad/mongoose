const userController = require("../DL/controller/userController");
const { createToken } = require("./jwt")

exports.getUserDetailsById = async (id) => {
    // await userController.create({ email: "Yon@walla.com" });
    if (id.length < 6) throw ({ code: 400, message: " id not provided" })
    return userController.read({ _id: id })

}
exports.getAllUsers = async () => {
    const user = await userController.read({})
    // return userController.read({ firstName: "shira" }, "adress")
    if (user.length === 0) throw ({ code: 400, message: "there is no users" })
    return user
}

exports.createUser = async (userFields) => {
    const eUser = await userController.read({ email: userFields.email })
    if (eUser.length) throw ({})
    return userController.create(userFields)
}
exports.register = async (userFields) => {
    const eUser = await userController.read({ email: userFields.email })
    if (eUser.length) throw ({ code: 400, message: "this email is already exist" })
    return userController.create(userFields)
}
exports.login = async (email, password) => {
    //validate user
    if (!email || !password) throw ({ code: 409, message: "missing data" })
    //user exist?
    const eUser = await userController.read({ email }, "password")
    console.log(eUser)
    if (eUser.length == 0) throw ({ code: 404, message: "user not found" })
    //passord match?
    console.log(eUser)
    if (password !== eUser[0].password) throw ({ code: 503, message: "not aout" })

    const token = createToken(eUser[0]._id)
    return token

}

exports.updateUser = async (id, newField) => {
    if (!id) throw ({ code: 400, message: " id not provided" })
    return userController.update({ _id: id }, newField);

}
exports.del = async (id) => {
    if (!id) throw ({ code: 400, message: " id not provided" })
    return userController.del({ _id: id });
}


//הקריאות לפונקציות:
// create(user1)
// read({ "address.homeNumber": { $lt: 10 }, email: "shira@gmail.com" });
// update({ email: 'shira@gmail.com' }, { password: '00000' });
// del({ email: 'shira@gmail.com' });
