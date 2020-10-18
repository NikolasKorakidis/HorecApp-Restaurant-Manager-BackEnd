const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");

const authRouter = require("./router/auth");
const tablesRouter = require("./router/tables");
const ordersRouter = require("./router/orders");
const categoriessRouter = require("./router/categories");

app.use(cors());
app.use(express.json());

app.use("/", authRouter);
app.use("/tables", tablesRouter);
app.use("/orders", ordersRouter);
app.use("/categories", categoriessRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
