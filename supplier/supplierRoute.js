const express = require("express");
const router = express.Router();
const supplierController = require("./supplierController");

router.get("/", supplierController.getAllSuppliers);
router.get("/:id", supplierController.getSupplierBySupplierId);
router.post("/", supplierController.createSupplier);

module.exports = router;
