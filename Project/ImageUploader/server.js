import express from "express";
import mongoose from "mongoose";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";

const app = express();

cloudinary.config({
  cloud_name: "dbuwgofdr",
  api_key: "477872429439488",
  api_secret: "X1pXSUXcfud_1zBDqJvhd8A_HRg",
});

mongoose
  .connect(
    "mongodb+srv://parthupanchal9:oFpYMIoPxxh9uifZ@cluster0.habwl.mongodb.net/",
    { dbName: "NodeJs_Learning" }
  )
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("Error", error));

app.get("/", (req, res) => {
  res.render("index.ejs", { imgUrl: null });
});

const storage = multer.diskStorage({
  // destination: "./public/upload",
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname);
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });

const imageSchema = new mongoose.Schema({
  filename: String,
  public_id: String,
  imgUrl: String,
});

const File = mongoose.model("cloudinary", imageSchema);

app.post("/upload", upload.single("file"), async (req, res) => {
  const file = req.file.path;
  const cloudinaryRes = await cloudinary.uploader.upload(file, {
    folder: "NodeJs_Learning",
  });
  // save to database
  const db = await File.create({
    filename: file.originalname,
    public_id: cloudinaryRes.public_id,
    imgUrl: cloudinaryRes.secure_url,
  });
  res.render("index.ejs", { imgUrl: cloudinaryRes.secure_url });
});

const PORT = 3000;
app.listen(PORT, () => console.log("Server listing", PORT));
