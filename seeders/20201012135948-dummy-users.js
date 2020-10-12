"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "John Doe",
          password: "john123",
          status: "junior",
        },
        {
          username: "Jane Doe",
          password: "jane123",
          status: "senior",
        },
        {
          username: "Lucky Luck",
          password: "lucky123",
          status: "manager",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
