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
    const rows = await db.query(query, [userId]);
    if (!Array.isArray(rows)) {
      return [new Message(rows)];
    }

    return rows.map((row) => new Message(row));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

Message.findOneByID = async (messageId) => {
  try {
    const query = "SELECT * FROM messages WHERE id = ?";
    const rows = await db.query(query, [messageId]);

    if (rows.length === 0) {
      return null;
    }
    const message = new Message(rows[0]);
    if (!message.isRead) {
      await Message.updateIsRead(messageId);
      message.isRead = true;
    }
    return message;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

Message.updateIsRead = async (messageId) => {
  try {
    const query = "UPDATE messages SET isRead = ? WHERE id = ?";
    await db.query(query, [true, messageId]);
  } catch (error) {
    throw error;
  }
};

module.exports = Message;
