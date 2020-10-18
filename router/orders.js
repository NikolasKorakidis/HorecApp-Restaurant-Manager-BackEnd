const { Router } = require("express");
const Table = require("../models").table;
const Order = require("../models").order;
const Item = require("../models").item;

const router = new Router();

router.get("/", async (req, res) => {
  const orders = await Order.findAll({
    include: Item,
  });
  res.json(orders);
});

module.exports = router;
