"use strict";
const bcrypt = require("bcrypt");
const { SALT_ROUNDS } = require("../config/constants");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "JohnDoe",
          password: "john123",
          status: "junior",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "JaneDoe",
          password: "jane123",
          status: "senior",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: "Manager",
          password: bcrypt.hashSync("123", SALT_ROUNDS),
          status: "manager",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
