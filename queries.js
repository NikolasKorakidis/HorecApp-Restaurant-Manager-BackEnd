const {
  user,
  item,
  category,
  // Order: order,
  table,
  orderItem,
} = require("./models");
const Order = require("./models").order;

const users = async () => {
  const res = await user.findAll();
  console.log(res);
};

// users();

const orders = async () => {
  const res = await orderItem.findAll({
    where: {
      orderId: 3,
    },
  });
  console.log(res);
};
// orders();
// console.log(orderItem);

const items = async () => {
  const res = await item.findAll({
    where: {
      categoryId: 1,
    },
  });
  console.log(res);
};

// items();

const tables = async () => {
  const res = await table.findAll({
    where: {
      order: true,
    },
  });
  console.log(res);
};

// tables();

const gettingOrderItem = async () => {
  const result = await orderItem.findAll();
  console.log(result);
};
// gettingOrderItem();

// const updateOrder = async (id) => {
//   const order = await Order.findByPk(id, {
//     include: item,
//   });
//   const itemAlreadyPresent = await order.hasItem(7);

//   if (itemAlreadyPresent) {
//     const itemToUpdate = await orderItem.findOne({
//       where: {
//         orderId: id,
//         itemId: 7,
//       },
//     });
//     itemToUpdate.qnt += 1;
//     itemToUpdate.save();
//     console.log(itemToUpdate);
//   } else {
//     order.addItem(7);
//   }
// };
// updateOrder(2);

// const updateOrder = async (id, itemId) => {
//   const order = await Order.findByPk(id, {
//     include: item,
//   });
//   const itemAlreadyPresent = await order.hasItem(itemId);

//   if (itemAlreadyPresent) {
//     const itemToUpdate = await orderItem.findOne({
//       where: {
//         orderId: id,
//         itemId: itemId,
//       },
//     });
//     itemToUpdate.qnt += 1;
//     itemToUpdate.save();
//   } else {
//     order.addItem(itemId);
//   }
// };
// updateOrder(2, 7);
