const express = require("express")
const router = express.Router();
const playlistLogic = require('../BL/playlistLogic')


router.get('/', async (req, res) => {
    const users = await playlistLogic.getPlaylist()
    res.send("secess")
})
router.post('/addpl', async (req, res) => {
    const pl = await playlistLogic.creatPlaylist(req.params.id);
})

module.exports = router