const jwt = require("jsonwebtoken")
const secret = "1234"

function createToken(id) {

    return jwt.sign({ id }, secret, { expiresIn: "1h" })

}
// console.log(createToken("abcd"))


function validateToken(token) {
    return jwt.verify(token, secret)
}
// console.log(validateToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOWYzNTcyMDFkZDFkOGMwYzE3MjZlOSIsImlhdCI6MTY1NTgyMDc4MSwiZXhwIjoxNjU1ODI0MzgxfQ.vhH1rCUs3KY_JYypmELp6ye8I1VGYIBilfP8BKtbOpU"));

module.exports = { createToken, validateToken }