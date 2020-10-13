const { user, item, category, order, table, orderItem } = require("./models");

const users = async () => {
  const res = await user.findAll();
  console.log(res);
};

// users();

const orders = async () => {
  const res = await orderitem.findAll({
    where: {
      orderId: 1,
      itemId: 4,
    },
  });
  console.log(res);
};
// orders();
console.log(orderItem);

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
  const res = await table.findAll();
  console.log(res);
};

// tables();
