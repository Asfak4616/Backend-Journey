const {default : mongoose }= require("mongoose")

const connectDb = async ()=>{
   try{
      await mongoose.connect("mongodb+srv://skasfakahamed495_db_user:asfak123@cluster0.mznvydu.mongodb.net/")
      console.log("✅ Database Connected Successfully!")
   } catch(error){
      console.log("❌ Database Connection Failed:", error.message)
   }
}
module.exports = connectDb;