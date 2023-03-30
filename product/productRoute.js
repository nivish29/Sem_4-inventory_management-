const productController = require("./productController");
const express = require("express");
const token_validation = require("./../auth/token_validation");
const router = express.Router();

router.get("/", token_validation.checktoken, productController.getAllProducts);
router.post("/", token_validation.checktoken, productController.addProduct);
router.get(
  "/search-product",
  token_validation.checktoken,
  productController.searchAnyProduct
);
router.patch("/update-product", productController.updateafter);

module.exports = router;
