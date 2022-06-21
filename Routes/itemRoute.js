const express = require("express")
const router = express.Router();

router.get('/', async (req, res) => {
    const users = await itemLogic.getItem()
    res.send("secess")
})

module.exports = router