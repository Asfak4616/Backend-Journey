import  app from "./src/app.js"
import connectDb from "./src/config/db.js"

connectDb()
app.listen(3000,()=>{
    console.log("The port number is 3000")
})
