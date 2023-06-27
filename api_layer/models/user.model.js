const db = require("../db/db.js");

const User = function (user) {
  this.id = user.id;
  this.username = user.username;
  this.totalMessages = user.totalMessages;
  this.totalUnreadMessages = user.totalUnreadMessages;
};

User.findOne = async (userName) => {
  try {
    let query = `Select * FROM users WHERE username = ?`;
    let rows = await db.query(query, [userName]);

    if (rows.length === 0) {
      return null;
    }

    if (rows.length > 0) {
      let user = new User(rows[0]);

      query = `SELECT COUNT(*) AS totalMessages, COUNT(IF(isRead = 0, 1, NULL)) AS totalUnreadMessages FROM messages WHERE userId = ?`;
      let messageResult = await db.query(query, [user.id]);

      user.totalMessages = messageResult[0].totalMessages;
      user.totalUnreadMessages = messageResult[0].totalUnreadMessages;
      return user;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = User;
