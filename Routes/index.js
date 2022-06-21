const express = require("express")
const router = express.Router();

const userRoute = require("./userRoute");
const itemRoute = require("./itemRoute");
const orderRoute = require("./orderRoute");


router.use("/users", userRoute);
router.use("/items", itemRoute);
router.use("/orders", orderRoute)

module.exports = router;