const {
  create,
  getUserById,
  updateUser,
  deleteUser,
  getUsers,
  getUserByUserId,
} = require("./userService");
const { genSaltSync, hashSync, compareSync } = require("bcrypt");
const { sign } = require("jsonwebtoken");

exports.createUser = (req, res) => {
  const body = req.body;
  const salt = genSaltSync(10);
  body.password = hashSync(body.password, salt);
  create(body, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({
        success: 0,
        message: "Database connection error",
      });
    }
    const jsontoken = sign({ result: results }, "qwerty123", {
      expiresIn: "1h",
    });
    return res.status(200).json({
      success: 1,
      data: jsontoken,
    });
  });
};
exports.getUserByUserId = (req, res) => {
  const id = req.params.id;
  getUserById(id, (err, results) => {
    if (err) {
      console.log(err);
      return;
    }
    if (!results) {
      return res.json({
        success: 0,
        message: "Record not found",
      });
    }
    return res.status(200).json({
      success: 1,
      data: results,
    });
  });
};

exports.getallUsers = (req, res) => {
  getUsers((err, results) => {
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

exports.login = (req, res) => {
  const body = req.body;
  getUserByUserId(body.user_id, (err, results) => {
    if (err) {
      console.log(err);
    }
    if (!results) {
      return res.json({
        success: 0,
        data: "invalid user_id or password",
      });
    }

    const result = compareSync(body.password, results.password);
    if (result) {
      results.password = undefined;
      const jsontoken = sign({ result: results }, "qwerty123", {
        expiresIn: "1h",
      });
      return res.json({
        success: 1,
        message: "login successful",
        token: jsontoken,
      });
    } else {
      return res.json({
        success: 0,
        data: "invalid user_id or password",
        token: "null",
      });
    }
  });
};
