const userLogic = require('../BL/userLogic')
const express = require("express");
const auth = require('../middlewere/auth');
const router = express.Router();




router.all("/test", auth, (req, res) => {
    res.send("test")
})

router.get('/', async (req, res) => {
    console.log("gg");
    try {
        const users = await userLogic.getAllUsers()
        res.send(users)
    }
    catch (error) {
        res.status(500).send({ message: "sorry, something went wrong" })
    }
})

router.get("/:id", async (req, res) => {
    try {
        const user = await userLogic.getUserDetailsById(req.params.id)
        res.send(user);
    }
    catch (error) {
        res.status(500).send({ message: "sorry, something went wrong" })
    }
})

router.post('/addUser', async (req, res) => {
    const { firstName, email, password } = req.body;
    try {
        const userFields = ({ firstName, lastName, email, })
        const user = await userLogic.createUser(userFields)
        res.send(user)
    }
    catch (error) {
        res.status(500).send({ message: "sorry, something went wrong" })
    }
})
router.post("/login", async (req, res) => {
    try {
        const token = await userLogic.login(req.body.email, req.body.password)
        // const existUser = await userLogic.login(req.body.email, req.body.password)
        // console.log(existUser)
        res.send({ token: token })
    }
    catch (error) {
        console.log(error)
            ;
        res.status(500).send({ message: error.message || "sorry, something went wrong" })
    }
})

router.post("/register", async (req, res) => {
    try {
        const newUser = await userLogic.register(req.body)
        console.log(newUser)
        res.send("register")
    }
    catch (error) {
        res.status(500).send({ message: error.message || "sorry, something went wrong" })
    }
})
router.put("/edit_user/:id", async (req, res) => {

    try {
        const sevedUser = await userLogic.updateUser(req.params.id, req.body)
        res.send(sevedUser)
    }
    catch (error) {
        res.status(500).send({ message: "sorry, something went wrong" })
    }
})


router.delete("/:id", async (req, res) => {
    try {
        const sevedUser = await userLogic.del(req.params.id)
        res.send(sevedUser)
    }
    catch (error) {
        res.status(500).send({ message: "sorry, something went wrong" })
    }
})



module.exports = router