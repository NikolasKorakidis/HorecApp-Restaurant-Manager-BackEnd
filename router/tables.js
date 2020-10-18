const { Router } = require("express");
const order = require("../models/order");
const Table = require("../models").table;
const Order = require("../models").order;
const Item = require("../models").item;

const router = new Router();

router.get("/", async (req, res) => {
  const tables = await Table.findAll({
    include: Order,
  });
  res.json(tables);
});

module.exports = router;
