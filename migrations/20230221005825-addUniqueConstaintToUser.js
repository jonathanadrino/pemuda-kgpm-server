"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.addConstraint("Users", {
      fields: ["username"],
      type: "unique",
      name: "User",
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint("Users", "User");
  },
};
