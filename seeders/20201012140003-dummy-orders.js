"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orders",
      [
        {
          id: 1,
          tableId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          tableId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          tableId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          tableId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orders", null, {});
  },
};
