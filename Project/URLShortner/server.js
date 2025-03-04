import express from "express";
import mongoose from "mongoose";
import { getOriginalUrl, shortUrl } from "./Controllers/url.js";

const app = express();

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    "mongodb+srv://parthupanchal9:oFpYMIoPxxh9uifZ@cluster0.habwl.mongodb.net/",
    {
      dbName: "NodeJs_Learning",
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("error", error));

app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

// shorting url logic
app.post("/short", shortUrl);

// redirect to original url using short code

app.get("/:shortCode", getOriginalUrl);

const PORT = 3000;
app.listen(PORT, () => console.log("Server listing", PORT));
