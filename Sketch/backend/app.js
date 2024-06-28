import express from "express";
import cookieParser from "cookie-parser";
import DbConnect from "./DbConnect/DbConnect.js";
const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("Hellow");
});

DbConnect();

app.listen(3000, () => {
  console.log("====================================");
  console.log("server is running");
  console.log("====================================");
});
