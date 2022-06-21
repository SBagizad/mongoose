require("dotenv").config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const router = require('./Routes')



app.use(express.json())
app.use(require('cors')())


// function loger(req, res, next) {
//     const token= req.body.token
//     if(...){
//     next()
//     }
//     else { res.send("not auth")
//     }
//     next()
// }
//     app.use(loger)




app.use('/api', router);

app.listen(port, () => console.log(`server is running on port => ${port}`))
require('./DL/db').connect();




//GET - www.loc.com

// GET www.loc.com/api/users
// POST www.loc.com/api/users
// body {name: moshe, passwd: 123 ....}

// PUT www.loc.com/api/users/1
// body {_id: 123, name: david, passwd: 234 .....}

// DELETE www.loc.com/users/1