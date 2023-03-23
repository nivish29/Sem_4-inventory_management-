const userController = require("./userController");
const express = require("express");
const router = express.Router();

router.post("/", userController.createUser);
router.get("/", userController.getallUsers);
router.get("/:id", userController.getUserByUserId);
router.post("/login", userController.login);

module.exports = router;
