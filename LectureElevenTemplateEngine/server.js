import express from "express";
import path from "path";

const app = express();
const PORT = 3000;

app.use(express.static(path.join(path.resolve(), "public")));

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

app.get("/", (req, res) => {
  let name = "Ram";
  res.render("index.ejs", { products });
});

app.listen(PORT, () => console.log("Server listing", PORT));
