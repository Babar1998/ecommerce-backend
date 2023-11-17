var express = require('express');
var router = express.Router();
const users = require("../controller/userController");
const authenticate = require("../controller/common/authenticationController");

/* GET users listing. */
router.get("/", authenticate.verifyToken, users.usersController);
router.post("/login", authenticate.login);
router.post("/add", users.addUserController);
router.put("/update/:id",users.updatedUserController);
router.delete("/delete/:id",users.deleteUserController);


module.exports = router;
