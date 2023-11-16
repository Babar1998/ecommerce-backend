const user = require("../models/schemas/userSchema");
const cart = require("../models/schemas/cartSchema");
const category = require("../models/schemas/categorySchema");
const product = require("../models/schemas/productSchema");
const sequelize = require("../common/dbconnection");



const models = sequelize.models;
console.log(models);
const db = {}
db.sequelize = sequelize;
module.exports = {sequelize, models};