'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.associate=(models)=>{
        Products.belongsTo(models.Stores,{foreignKey:"StoreId", as:"Stores"})
      }
    }
  }
  Products.init({
    StoreId: DataTypes.UUID,
    ProductName: DataTypes.STRING,
    ProductAmt: DataTypes.INTEGER,
    ProductQty: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};


module.exports = Products