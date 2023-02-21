'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sidang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Sidang.hasMany(models.Data,{foreignKey: 'SidangId'})
    }
  }
  Sidang.init({
    name: DataTypes.STRING,
    wilayah: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sidang',
  });
  return Sidang;
};