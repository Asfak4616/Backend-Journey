import express from 'express'
import { upload } from '../config/multer.config.js';
import { createPost } from '../controller/post.controller.js';
const router = express.Router()

router.post("/create",upload.single("image"), createPost)

export default router;