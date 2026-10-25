const dotenv = require("dotenv")
dotenv.config();
const app = require("./src/app")

app.listen(3000,()=>{
    console.log("The port number is 3000")
})