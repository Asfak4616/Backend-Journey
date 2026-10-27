const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    res.send("Ok done it")
})

module.exports = app;
