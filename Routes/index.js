const express = require("express")
const router = express.Router();

const userRoute = require("./userRoute");
const playlistRoute = require("./playlistRoute");


router.use("/users", userRoute);
router.use("/playlist", playlistRoute);

module.exports = router;