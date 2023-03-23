const express = require("express");
// const { createPool } = require("mysql2");
const pool = require("./database");
const app = express();
const dotenv = require("dotenv");
const userRouter = require("./user/userRoute");
const productRouter = require("./product/productRoute");
const supplierRouter = require("./supplier/supplierRoute");

dotenv.config({ path: "./config.env" });

const port = 8001;

app.use(express.json()); // using this middleware to convert the json object into javascript objects

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use("/api/supplier", supplierRouter);

app.get("/", (req, res) => {
  res.send({
    status: "success",
    message: "restApi working successfully",
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
