const express = require("express");
const userRoutes = require("./router/user.routes");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok done it");
});

app.use("/user", userRoutes);

module.exports = app;
