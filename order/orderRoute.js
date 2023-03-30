const orderController = require("./orderController");
const express = require("express");
// const token_validation = require("./../auth/token_validation");
const router = express.Router();

router.post("/", orderController.addOrder);

module.exports = router;
