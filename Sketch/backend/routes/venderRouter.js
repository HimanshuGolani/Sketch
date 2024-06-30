import express from "express";

const vRouter = express.Router();

vRouter.get("/create", (req, res) => {
  res.send("Create");
});

// vRouter.get();

export default vRouter;
