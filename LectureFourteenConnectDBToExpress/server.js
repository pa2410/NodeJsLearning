import express from "express";
import mongoose from "mongoose";

const app = express();

mongoose
  .connect(
    "mongodb+srv://parthupanchal9:oFpYMIoPxxh9uifZ@cluster0.habwl.mongodb.net/",
    {
      dbName: "NodeJs Learning",
    }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("Error ->", error));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server is listing", PORT);
});
