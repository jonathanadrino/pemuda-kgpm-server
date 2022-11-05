'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING(1000),
        allowNull: false
      },
      highlight: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      imgUrl: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      body: {
        type: Sequelize.STRING(10000),
        allowNull: false,
      },
      addedBy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      modifiedBy: {
        type: Sequelize.STRING
      },
      carousel: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};