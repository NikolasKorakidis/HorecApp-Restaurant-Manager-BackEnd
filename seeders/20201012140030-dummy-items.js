"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          name: "Cola",
          price: 3,
          picture: "as",
          categoryId: 1,
        },
        {
          name: "Fanta",
          price: 3,
          picture: "as",
          categoryId: 1,
        },
        {
          name: "Sparkling Water",
          price: 3,
          picture: "as",
          categoryId: 1,
        },
        {
          name: "Still Water",
          price: 3,
          picture: "as",
          categoryId: 1,
        },
        {
          name: "Heineken",
          price: 3,
          picture: "as",
          categoryId: 2,
        },
        {
          name: "Affligem",
          price: 3.5,
          picture: "as",
          categoryId: 2,
        },
        {
          name: " Lagunitas IPA",
          price: 5,
          picture: "as",
          categoryId: 2,
        },
        {
          name: "White Beer",
          price: 4,
          picture: "as",
          categoryId: 2,
        },
        {
          name: "Sauvignon Blanc",
          price: 5,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Chardonnay",
          price: 5,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Verdejo",
          price: 6,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Cabernnet Sauvignon",
          price: 5,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Porto",
          price: 8,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Mavrodaphne",
          price: 4,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Luc Rose",
          price: 5,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "House Rose",
          price: 5,
          picture: "as",
          categoryId: 3,
        },
        {
          name: "Smirnoff",
          price: 5,
          picture: "as",
          categoryId: 4,
        },
        {
          name: "Absolut",
          price: 5,
          picture: "as",
          categoryId: 4,
        },
        {
          name: "Johny Walker",
          price: 5,
          picture: "as",
          categoryId: 4,
        },
        {
          name: "Chivas",
          price: 8,
          picture: "as",
          categoryId: 4,
        },
        {
          name: "Hendrix",
          price: 7,
          picture: "as",
          categoryId: 4,
        },
        {
          name: "Gordon's",
          price: 5,
          picture: "as",
          categoryId: 4,
        },
        {
          name: "Old Fashioned",
          price: 12,
          picture: "as",
          categoryId: 5,
        },
        {
          name: "Dry Martini",
          price: 12,
          picture: "as",
          categoryId: 5,
        },
        {
          name: "Americano",
          price: 12,
          picture: "as",
          categoryId: 5,
        },
        {
          name: "Margarita",
          price: 11,
          picture: "as",
          categoryId: 5,
        },
        {
          name: "Fries",
          price: 5,
          picture: "as",
          categoryId: 6,
        },
        {
          name: "Bitterballen",
          price: 8,
          picture: "as",
          categoryId: 6,
        },
        {
          name: "Kaastengels",
          price: 7,
          picture: "as",
          categoryId: 6,
        },
        {
          name: "Mix Platter",
          price: 15,
          picture: "as",
          categoryId: 6,
        },
        {
          name: "Spare Ribs",
          price: 17,
          picture: "as",
          categoryId: 7,
        },
        {
          name: "House Burger",
          price: 15,
          picture: "as",
          categoryId: 7,
        },
        {
          name: "Chicken Salad",
          price: 12,
          picture: "as",
          categoryId: 7,
        },
        {
          name: "Cheesecake",
          price: 6,
          picture: "as",
          categoryId: 8,
        },
        {
          name: "Tiramissu",
          price: 4,
          picture: "as",
          categoryId: 8,
        },
        {
          name: "Apple Pie",
          price: 4,
          picture: "as",
          categoryId: 8,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  },
};
