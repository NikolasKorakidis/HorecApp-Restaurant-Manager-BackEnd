"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          orderId: 1,
          itemId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          itemId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          itemId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          itemId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("orderItems", null, {});
  },
};
