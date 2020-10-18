"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class table extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      table.hasMany(models.order);
    }
  }
  table.init(
    {
      position: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "table",
    }
  );
  return table;
};
