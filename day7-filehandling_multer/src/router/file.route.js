const express = require("express")


const router = express.Router();

router.post("/",(req,res)=>{
    try {

        
        res.status(200).json({
            message:"File received Successfully"
        })
        
    } catch (error) {
        return res.status(500).json({
            message:"Internal Server Error"
        })
    }
})

module.exports = router;