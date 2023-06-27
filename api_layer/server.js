var express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");

var app = express();
app.use(bodyParser.json());
app.use(cors());

const myUser = require("./models/user.model");
const messages = require("./models/messages.model");

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

app.get("/messages/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    const userMessages = await messages.findAllByUserId(userId);
    res.json(userMessages);
  } catch (error) {
    res.status(500).json({ error: "failed to retrieve messages" });
  }
});

app.listen(3001, function () {
  console.log("app listening on port 3001!");
});
