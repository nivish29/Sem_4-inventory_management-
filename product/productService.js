const pool = require("./../database");

exports.getProducts = (id, callback) => {
  pool.query(
    `select * from PRODUCT where USER_ID =?`,
    [id],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
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

exports.deleteProd = (id, callback) => {
  pool.query(
    `delete from PRODUCT where product_id=?`,
    [id],
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

exports.updateProduct = (data, callback) => {
  pool.query(
    `UPDATE PRODUCT SET PRESENT_QUANTITY = PRESENT_QUANTITY+(SELECT o.QUANTITY FROM ORDERS as o where o.ORDER_ID=?) WHERE PRODUCT_ID=?`,
    [data.ORDER_ID, data.PRODUCT_ID],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};
