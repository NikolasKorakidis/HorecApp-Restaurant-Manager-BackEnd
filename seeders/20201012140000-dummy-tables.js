"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "tables",
      [
        {
          position: "left",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "left",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "left",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "left",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "left",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "left",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "right",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "right",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "right",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "right",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: "bar",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("tables", null, {});
  },
};
