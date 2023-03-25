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

exports.getSupplierById = (supplier_name, callback) => {
  pool.query(
    `select * from SUPPLIER where NAME like '%${supplier_name}%'`,
    [supplier_name],
    (error, results, fields) => {
      if (error) {
        return callback(error);
      }
      return callback(null, results[0]);
    }
  );
};
