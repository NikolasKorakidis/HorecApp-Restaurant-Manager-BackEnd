"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tables",
      [
        {
          number: 1,
        },
        {
          number: 2,
        },
        {
          number: 3,
        },
        {
          number: 4,
        },
        {
          number: 5,
        },
        {
          number: 6,
        },
        {
          number: 7,
        },
        {
          number: 8,
        },
        {
          number: 9,
        },
        {
          number: 10,
        },
        {
          number: 11,
        },
        {
          number: 12,
        },
        {
          number: 13,
        },
        {
          number: 14,
        },
        {
          number: 15,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tables", null, {});
  },
};
