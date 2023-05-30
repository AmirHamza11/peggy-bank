import express from "express";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Bank listening at http://localhost:${process.env.PORT}`);
});
