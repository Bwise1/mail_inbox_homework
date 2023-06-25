var express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.json());

const myUser = require("./models/user.model");

app.get("/", function (req, res) {
  res.send("Mail Inbox version 1.0");
});

app.post("/login", async function (req, res) {
  const username = req.body.username;

  const loggedIn = await myUser.findOne(username);

  if (loggedIn == null) {
    res.status(204).send({ message: "User not found" });
  } else {
    res.status(200).send({
      data: loggedIn,
    });
  }
});

app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
