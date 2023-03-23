const pool = require("./../database");

exports.getProducts = (callback) => {
  pool.query(`select * from PRODUCT`, [], (error, results, fields) => {
    if (error) {
      return callback(error);
    }
    return callback(null, results);
  });
};
