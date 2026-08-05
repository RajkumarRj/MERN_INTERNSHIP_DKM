import express from "express";
import Task from "../model/TaskSchema.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Api is working");
});

router.post("/add", (req, res) => {
  const task = new Task(req.body);
  task.save();
  res.json(task);
});
export default router;


