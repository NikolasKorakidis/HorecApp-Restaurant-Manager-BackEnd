const { Router } = require("express");
const Order = require("../models").order;
const Item = require("../models").item;
const OrderItem = require("../models").orderItem;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        {
          model: Item,
          through: {
            attributes: ["itemId", "orderId", "qnt"],
          },
        },
      ],
    });
    res.json(orders);
  } catch (error) {
    console.log(error);
  }
});

router.post("/", async (req, res) => {
  const { tableId } = req.body;

  try {
    if (!tableId) {
      return res.status(400).json({ msg: "Please Provide ID and Table ID" });
    }
    const newOrder = await Order.create({
      tableId,
    });

    return res
      .status(201)
      .json({ msg: "New Order Created", newOrder: newOrder });
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const order = await Order.findByPk(req.params.id);

    if (order) {
      await order.destroy();

      res.json({
        message: `Order with ID: ${req.params.id} had been removed`,
        orderId: order.id,
        tableId: order.tableId,
      });
    } else {
      res.json({
        message: `There is no Order with ID: ${req.params.id}`,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.patch("/add/:id", async (req, res) => {
  const itemId = parseInt(req.body.itemId);
  const id = parseInt(req.params.id);

  try {
    const order = await Order.findByPk(id, {
      include: Item,
    });
    const itemAlreadyPresent = await order.hasItem(itemId);

    if (itemAlreadyPresent) {
      const itemToUpdate = await OrderItem.findOne({
        where: {
          orderId: id,
          itemId: itemId,
        },
      });

      itemToUpdate.qnt = itemToUpdate.qnt === null ? 1 : itemToUpdate.qnt + 1;
      const item = await itemToUpdate.save();
      res.json(item);
    } else {
      OrderItem.create({
        itemId: itemId,
        orderId: id,
        qnt: 1,
      });
      res.json(OrderItem);
    }
  } catch (error) {
    console.log(error);
  }
});

router.patch("/remove/:id", async (req, res) => {
  const itemId = parseInt(req.body.itemId);
  const id = parseInt(req.params.id);

  try {
    const order = await Order.findByPk(id, {
      include: Item,
    });
    const itemAlreadyPresent = await order.hasItem(itemId);

    if (itemAlreadyPresent) {
      const itemToUpdate = await OrderItem.findOne({
        where: {
          orderId: id,
          itemId: itemId,
        },
      });

      itemToUpdate.qnt =
        itemToUpdate.qnt === 1 ? itemToUpdate.destroy() : itemToUpdate.qnt - 1;
      const item = await itemToUpdate.save();
      res.json(item);
    }
  } catch (error) {
    console.log(error);
  }
});

// on delete if there remove one and if is 1 delete

module.exports = router;
