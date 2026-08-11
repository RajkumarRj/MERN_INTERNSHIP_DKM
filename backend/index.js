import express from "express";
import router from "./routes/demoRoutes.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/testdb")
  .then((res) => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(router); // middleware

app.get("/home", (req, res) => {
  res.json({ message: "APi is working", success: "True" });
});

// mongodb://localhost:27017/testdb    => mongoose
app.listen(3000, () => {
  console.log("Server is up and running");
});
