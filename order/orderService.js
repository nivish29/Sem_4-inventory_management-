const pool = require("./../database");

exports.createOrder = (data, callback) => {
  pool.query(
    `INSERT INTO ORDERS (ORDER_ID, PRODUCT_ID, SUPPLIER_ID, DATE, QUANTITY) values (?,?,?,?,?)`,
    [
      data.ORDER_ID,
      data.PRODUCT_ID,
      data.SUPPLIER_ID,
      data.DATE,
      data.QUANTITY,
    ],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};
