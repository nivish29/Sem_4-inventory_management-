const productController = require("./productController");
const express = require("express");
const token_validation = require("./../auth/token_validation");
const router = express.Router();

router.get("/", token_validation.checktoken, productController.getAllProducts);
router.post("/", token_validation.checktoken, productController.addProduct);

module.exports = router;
