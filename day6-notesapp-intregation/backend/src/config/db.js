const {default : mongoose} = require("mongoose")

const  connectDb =async ()=>{
  try{
  await mongoose.connect(process.env.mongodb_uri)
  console.log("Mongodb connected")
  }
  catch(error){
    console.log("The error is ",error)
  }
}
module.exports = connectDb;