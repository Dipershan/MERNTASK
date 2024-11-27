const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.route("/signup").post(userController.register);
router.route("/login").post(userController.login);
router.route("/users").get(userController.listUsers);
router.route("/user/:id").delete(userController.deleteUser);
router.route("/reset-password").patch(userController.resetUserPassword);


module.exports = router;

