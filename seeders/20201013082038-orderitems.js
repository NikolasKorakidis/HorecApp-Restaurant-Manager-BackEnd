"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "orderItems",
      [
        {
          orderId: 1,
          itemId: 4,
          qnt: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 2,
          itemId: 7,
          qnt: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 3,
          itemId: 9,
          qnt: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          itemId: 3,
          qnt: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          itemId: 10,
          qnt: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          itemId: 7,
          qnt: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          itemId: 7,
          qnt: 3,

          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          orderId: 4,
          itemId: 7,
          qnt: 3,

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
