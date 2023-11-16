const sequelize = require("../common/dbconnection");



const models = sequelize.models;
console.log(models);
const db = {}
db.sequelize = sequelize;
module.exports = {sequelize, models};