const db = require("../db/db.js");

const User = function (user) {
  this.id = user.id;
  this.username = user.username;
  this.totalMessages = user.totalMessages;
  this.totalUnreadMessages = user.totalUnreadMessages;
};

User.findOne = async (userName) => {
  let query = `Select * FROM users WHERE username = ?`;
  let result = await db.query(query, [userName]);

  if (result.length > 0) {
    let user = new User(result[0]);

    query = `SELECT COUNT(*) AS totalMessages, COUNT(IF(isRead = 0, 1, NULL)) AS totalUnreadMessages FROM messages WHERE userId = ?`;
    let messageResult = await db.query(query, [user.id]);

    user.totalMessages = messageResult[0].totalMessages;
    user.totalUnreadMessages = messageResult[0].totalUnreadMessages;
    return user;
  } else {
    return null;
  }
};

module.exports = User;
