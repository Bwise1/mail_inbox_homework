const db = require("../db/db.js");

const Message = function (message) {
  this.id = message.id;
  this.userId = message.userId;
  this.subject = message.subject;
  this.content = message.content;
  this.isRead = message.isRead;
};

Message.findAllByUserId = async (userId) => {
  try {
    let query = "SELECT * FROM messages WHERE userId = ?";
    const [rows] = await db.query(query, [userId]);
    if (!Array.isArray(rows)) {
      return [new Message(rows)];
    }

    return rows.map((row) => new Message(row));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = Message;
