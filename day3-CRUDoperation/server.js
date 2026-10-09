const express = require("express");
const app = express();

app.use(express.json());

let users = [];

//post Means Create
app.post("/create", (req, res) => {
  let body = req.body;
  users.push(body);
  res.send(users);
});

//get Means Read

app.get("/", (req, res) => {
  res.send(users);
});

app.listen(3000, () => {
  console.log("port number is 3000");
});
