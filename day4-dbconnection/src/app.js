const express = require("express")
const connectDb = require("./config/db")

const dns = require("dns");
const NotesModel = require("./models/noteSchema");
dns.setServers(["8.8.8.8", "8.8.4.4"])


const app = express();

app.use(express.json())

connectDb()

app.get("/",(req,res)=>{
   res.send("Ok done")
})

app.post("/create", async(req,res)=>{
  let {title,description} = req.body

const newNote = await NotesModel.create({
    title,
    description
})
 
  res.send({
    success:true,
    message:"Note Created Successfully",
    data:newNote,
  })
})
module.exports = app;