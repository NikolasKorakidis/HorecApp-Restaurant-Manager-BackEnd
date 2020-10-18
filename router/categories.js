const { Router } = require("express");
const Item = require("../models").item;
const Category = require("../models").category;

const router = new Router();

router.get("/", async (req, res) => {
  const orders = await Category.findAll({
    include: Item,
  });
  res.json(orders);
});

module.exports = router;
