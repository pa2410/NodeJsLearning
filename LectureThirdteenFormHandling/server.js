import express from "express";

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/form-submit", (req, res) => {
  console.log(req.body);
  res.json({ message: "Your form has been submitted", success: true });
});

app.listen(PORT, () => {
  console.log("Server listing", PORT);
});
