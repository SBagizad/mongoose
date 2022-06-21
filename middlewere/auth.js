const { validateToken } = require("../BL/jwt")
const { read } = require("../DL/controller/userController")


async function auth(req, res, next) {
    const token = req.headers.authorization

    console.log(token);
    try {
        //verify token
        const decode = validateToken(token)
        //chack if the user exist
        const eUser = await read({ _id: decode.id })
        if (!eUser[0]) throw ""
        //next/ res error
        next()
    } catch (error) {
        console.log((error));
        res.status(503).send({ message: "not auth" })

    }

}
module.exports = auth