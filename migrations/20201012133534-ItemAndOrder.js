"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn("orders", "tableId", {
        type: Sequelize.INTEGER,
        references: {
          model: "tables",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }),
      queryInterface.addColumn("items", "categoryId", {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn("orders", "tableId"),
      queryInterface.removeColumn("items", "categoryId"),
    ]);
  },
};
