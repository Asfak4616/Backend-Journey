import { ImageKit } from "@imagekit/nodejs/client.js";
import dotenv from "dotenv"
dotenv.config()

const storageInstance = new ImageKit({
    urlEndpoint:process.env.IK_URL,
    publicKey:process.env.IK_PUBLIC_KEY,
    privateKey:process.env.IK_PRIVATE_KEY

})

export const sendFiles = async(file,fileName)=>{

    const obj = {
        file:file,
        fileName:fileName,
        folder:'cohort-3'
    }
    return await storageInstance.files.upload(obj)
   
}