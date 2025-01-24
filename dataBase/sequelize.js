const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("ecommerce2", "root","adejobii20", {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;