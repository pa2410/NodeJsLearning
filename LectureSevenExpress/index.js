import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

const products = [
  {
    title: "iPhone15",
    price: "75,000INR",
  },
  {
    title: "iPhone16",
    price: "85,000INR",
  },
  {
    title: "iPhone16 Pro Max",
    price: "95,000INR",
  },
];

// send response
app.get("/", (req, res) => {
  //   res.json({
  //     message: "Fetched all products",
  //     products: products,
  //     success: true,
  //   });
  const dir = path.resolve();
  const url = path.join(dir, "./index.html");
  res.sendFile(url);
});

app.post("/srk", (req, res) => {
  res.send("<h1>You are in SRK Page...!</h2>");
});

app.listen(PORT, () => {
  console.log("Server listing", PORT);
});
