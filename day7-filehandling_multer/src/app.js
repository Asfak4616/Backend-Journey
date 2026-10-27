const express = require("express");
const fileRouter = require("./router/file.route");

const app = express();
app.use(express.json());

app.get(
  "/",
  (req, res) => {res.send("Ok done it")},
);

app.use("/file", fileRouter);

module.exports = app;
