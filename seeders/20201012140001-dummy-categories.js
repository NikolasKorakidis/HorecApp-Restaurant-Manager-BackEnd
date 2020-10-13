"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Soft Drinks",
        },
        {
          name: "Beers",
        },
        {
          name: "Wines",
        },
        {
          name: "Liquer",
        },
        {
          name: "Cocktails",
        },
        {
          name: "Snacks",
        },
        {
          name: "Main Courses",
        },
        {
          name: "Desserts",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("categories", null, {});
  },
};
