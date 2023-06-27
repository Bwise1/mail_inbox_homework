const mysql = require("mysql2/promise");
const dotenv = require("dotenv");

dotenv.config();

let connection;
async function createConnection() {
  connection = await mysql.createConnection(process.env.DATABASE_URL);
}
async function query(sql, params) {
  if (!connection) {
    console.log("here from connection");
    await createConnection();
  }
  const [results] = await connection.query(sql, params);
  console.log(results);

  return results;
}

module.exports = {
  query,
};
