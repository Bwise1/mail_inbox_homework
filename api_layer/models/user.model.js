const db = require("../db/db.js");

const User = function (user) {
  this.id = user.id;
  this.username = user.username;
};

User.findOne = async (userName) => {
  let query = `Select * FROM users WHERE username = ?`;
  let result = await db.query(query, [userName]);

  if (result.length > 0) {
    return new User(result[0]);
  } else {
    return null;
  }
};

module.exports = User;
