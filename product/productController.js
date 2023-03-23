const { getProducts } = require("./productService");

exports.getAllProducts = (req, res) => {
  getProducts((err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};
