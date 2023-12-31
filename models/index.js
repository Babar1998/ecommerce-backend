const user = require("../models/schemas/userSchema");
const cart = require("../models/schemas/cartSchema");
const category = require("../models/schemas/categorySchema");
const product = require("../models/schemas/productSchema");
const sequelize = require("../common/dbconnection");

user.hasMany(cart, {onDelete: "CASCADE", foreignKey:{name: "userID"}})
cart.belongsTo(user, {onDelete: "CASCADE", foreignKey:{name: "userID"}})

category.hasMany(product, {onDelete: "CASCADE", foreignKey:{name: "categoryID"}})
product.belongsTo(category, {onDelete: "CASCADE", foreignKey:{name: "categoryID"}})

product.belongsToMany(cart,{through: "product_cart", foreignKey: {name: "productID"}, })
cart.belongsToMany(product,{through: "product_cart", foreignKey: {name: "cartID"},}) 

const models = sequelize.models;
console.log(models);
const db = {}
db.sequelize = sequelize;
module.exports = {sequelize, models};