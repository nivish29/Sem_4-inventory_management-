const pool = require("./../database");

exports.getSupplier = (callback) => {
  pool.query(`select * from SUPPLIER`, [], (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
};

exports.create = (data, callback) => {
  pool.query(
    `insert into SUPPLIER(SUPPLIER_ID,CONTACT_NO,NAME) values(?,?,?)`,
    [data.SUPPLIER_ID, data.CONTACT_NO, data.NAME],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results);
    }
  );
};

exports.getSupplierById = (SUPPLIER_ID, callback) => {
  pool.query(
    `select * from SUPPLIER where SUPPLIER_ID=?`,
    [SUPPLIER_ID],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    }
  );
};
