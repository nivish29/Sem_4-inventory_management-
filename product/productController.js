const { getProducts } = require("./productService");

exports.getAllProducts = async (req, res) => {
  try {
    getProducts((err, results) => {
      if (err) {
        console.log(err);
        return;
      }
      return res.status(200).json(results);
    });
  } catch (err) {
    res.status(400).json({
      status: "failed",
      message: err.message,
    });
  }
};

exports.createProduct = async (req, res) => {};
