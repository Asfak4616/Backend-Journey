import mongoose from "mongoose";
import dns from "node:dns";

// Fix for Windows querySrv ECONNREFUSED error when resolving MongoDB Atlas SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongodb is connected");
  } catch (error) {
    console.log("Database connection error:", error.message);
  }
};

export default connectDb;