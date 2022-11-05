'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Posts', 'version', { type: Sequelize.INTEGER});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Posts', 'version', { type: Sequelize.INTEGER });
  }
};
