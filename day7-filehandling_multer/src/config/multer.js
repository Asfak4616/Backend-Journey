const multer = require("multer")

//disk storage for local

const storageForlocal = multer.diskStorage({
    destination :(req,file,cb)=>{
        cb(null,'uploads/')
    },
    filename :(req,file,cb)=>{
        //size and ratio and formet
        cb(null,Date.now() + file.originalname)
    }
})

// for server
const storageForServer = multer.memoryStorage()


const uploads = multer({storage :storageForlocal})

module.exports = uploads;