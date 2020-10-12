"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class orderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      orderItem.belongsTo(models.item);
      orderItem.belongsTo(models.order);
    }
  }
  orderItem.init(
    {
      orderId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "orderItem",
    }
  );
  return orderItem;
};
