const {
  getProducts,
  createProd,
  searchProduct,
  updateProduct,
} = require("./productService");

exports.getAllProducts = async (req, res) => {
  try {
    // console.log("decodedToken", req.decodedToken);
    const id = req.decodedToken.result.user_id;
    console.log(`User_id: ${id}`);
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

exports.addProduct = (req, res) => {
  const body = req.body;
  const id = req.decodedToken.result.user_id;
  console.log(id);
  createProd(body, id, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};

exports.searchAnyProduct = async (req, res) => {
  const name = req.query.product_name;
  console.log(name);
  searchProduct(name, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};

exports.updateafter = async (req, res) => {
  const body = req.body;
  updateProduct(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};
