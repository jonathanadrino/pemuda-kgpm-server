'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Renungan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Renungan.init({
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    body: DataTypes.STRING(10000)
  }, {
    sequelize,
    modelName: 'Renungan',
  });
  return Renungan;
};