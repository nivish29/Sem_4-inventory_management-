const pool = require("./../database");

exports.getProducts = (callback) => {
  pool.query(`select * from PRODUCT`, [], (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
};

exports.createProd = (data, id, callback) => {
  pool.query(
    `insert into PRODUCT(
      PRODUCT_ID,
      PRODUCT_NAME,
      PRESENT_QUANTITY,
      MIN_QUANTITY,
      SUPPLIER_ID,
      SELLING_PRICE,
      USER_ID) values(?,?,?,?,?,?,?)`,
    [
      data.PRODUCT_ID,
      data.PRODUCT_NAME,
      data.PRESENT_QUANTITY,
      data.MIN_QUANTITY,
      data.SUPPLIER_ID,
      data.SELLING_PRICE,
      id,
    ],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.searchProduct = (name, callback) => {
  pool.query(
    `select * from PRODUCT where product_name like '%${name}%'`,
    [name],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};
