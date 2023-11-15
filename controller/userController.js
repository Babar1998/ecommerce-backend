var express = require("express");
var router = express.Router();

function userController (req, res, next) {
    res.send('respond with a resource');
  }

module.exports = {userController};