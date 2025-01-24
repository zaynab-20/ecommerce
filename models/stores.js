const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../database/sequelize');

class Stores extends Model {}

Stores.init(
  {
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID
    },
    StoreName: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.STRING,
      unique:true
    },
    location: {
      type: DataTypes.STRING
    },
  },
  {
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: 'Stores', // We need to choose the model name
  },
);

// the defined model is the class itself

module.exports= Stores;
