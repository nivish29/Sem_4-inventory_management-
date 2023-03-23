const { createPool } = require("mysql2");

const pool = createPool({
  host: "db4free.net",
  user: "inventory",
  password: "nihal123",
  database: "inventory_manage",
  maxIdle: 10,
});

module.exports = pool;
