import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config";
import DbConnect from "./DbConnect/DbConnect.js";
import vRouter from "./routes/venderRouter.js";
import uRouter from "./routes/userRouter.js";
import pRouter from "./routes/productRouter.js";

// app instance
const app = express();

// middlewares
app.use(express.json());
app.use(cookieParser());

// routers
app.use("/api/v1/venders", vRouter);
app.use("/api/v1//users", uRouter);
app.use("/api/v1//products", pRouter);

// db connect
DbConnect();

// starting the app at the port
app.listen(process.env.PORT, () => {
  console.log("====================================");
  console.log("server is running", process.env.PORT);
  console.log("====================================");
});
