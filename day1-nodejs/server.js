
let http = require("http");
let server = http.createServer((req,res)=>{
    console.log("i am server")
    res.end("ok ham backend start kar Chuka hu")
})
server.listen(3000,()=>{
    console.log("server is running in 3000")
})