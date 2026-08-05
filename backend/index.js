import express from "express";
import router from "./routes/demoRoutes.js";
import mongoose from "mongoose";

const app = express();

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/testdb")
  .then((res) => console.log("Database connected"))
  .catch((err) => console.log(err));

app.use(router); // middleware

app.get("/home", (req, res) => {
  res.send("Hello home route is working");
});

// mongodb://localhost:27017/testdb    => mongoose
app.listen(3000, () => {
  console.log("Server is up and running");
});
