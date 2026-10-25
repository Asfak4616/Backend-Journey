const express = require("express");
const connectDb = require("./config/db");
const cors = require('cors')

const notesRoute = require("./routes/notes.route");
const notesModel = require("./models/notes.models");

const app = express();

app.use(cors({
    origin:"http://localhost:5173",
}))

app.use(express.json())
connectDb()

app.get("/",(req,res)=>{
    res.send("Ok done..")
})

app.use("/notes",notesRoute)

module.exports = app;