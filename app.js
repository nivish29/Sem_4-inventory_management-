const express = require("express");
// const { createPool } = require("mysql2");
const pool = require("./database");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./user/userRoute");
const productRouter = require("./product/productRoute");
const supplierRouter = require("./supplier/supplierRoute");
const orderRoute = require("./order/orderRoute");
const cors = require("cors");
dotenv.config({ path: "./config.env" });

app.use(cors());

const port = 8001;

app.use(express.json()); // using this middleware to convert the json object into javascript objects

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/supplier", supplierRouter);
app.use("/api/order", orderRoute);

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "restApi working successfully",
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
