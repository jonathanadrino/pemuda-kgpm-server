'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Data.belongsTo(models.User, { foreignKey: "UserId" });
      Data.belongsTo(models.Sidang, { foreignKey: "SidangId" });
    }
  }
  Data.init({
    name: DataTypes.STRING,
    citizenId: DataTypes.STRING,
    birthplace: DataTypes.STRING,
    birthdate: DataTypes.STRING,
    address: DataTypes.STRING(2000),
    bloodtype: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    occupation: DataTypes.STRING,
    SidangId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Data',
  });
  return Data;
};