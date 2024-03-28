import * as dotenv from 'dotenv';
dotenv.config();
// const express = require("express");
import mongoose from "mongoose";
// const cors = require("cors");
// const authRouter = require("./routes/authRoutes");

// const app = express();
// app.use(cors());
// app.use(express.json());

// app.use("/auth", authRouter);

const connectToMongo = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    throw new Error("Unable to connect to MongoDB");
  }
};

export default connectToMongo;
