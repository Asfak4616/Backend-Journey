const express = require("express");
const userRoutes = require("./src/router/user.routes");
var cors = require('cors')
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Ok done it");
});

app.use(cors({
    origin:"http://localhost:5173",
}))


app.use("/user", userRoutes);

module.exports = app;
