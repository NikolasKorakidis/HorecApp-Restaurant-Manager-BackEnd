"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Soft Drinks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Beers",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Wines",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Liquer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Cocktails",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Snacks",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Main Courses",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Desserts",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
