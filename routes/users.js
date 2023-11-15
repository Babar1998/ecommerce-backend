var express = require('express');
var router = express.Router();
const users = require("../controller/userController");

/* GET users listing. */
router.get('/', users.userController);

module.exports = router;
