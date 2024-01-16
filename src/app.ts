import express from "express";
import mongoose from "mongoose";

const app = express();
const { PORT = 3000, MONGO_URI = "mongodb://127.0.0.1:27017/mestodb" } =
  process.env;
mongoose.connect(MONGO_URI);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("MongoDB connection successful.");
});

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.on("disconnected", () => {
  console.log("MongoDB connection disconnected.");
});

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
