import express from "express";
import dotenv from "dotenv";
import path from "node:path";
import postRoutes from './router/post.route.js'

dotenv.config({ path: path.resolve(import.meta.dirname, "../.env") });

const app = express();
app.use(express.json());


app.use("/api/post",postRoutes)

export default app;
