import express from "express";
import mongoose from "mongoose";
import { userRegister } from "./controllers/user.js";

const app = express();
const PORT = 3000;
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://parthupanchal9:oFpYMIoPxxh9uifZ@cluster0.habwl.mongodb.net/",
    {
      dbName: "NodeJs_Learning",
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("Error:-", error));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", userRegister);

app.listen(PORT, () => console.log("Server listing", PORT));
