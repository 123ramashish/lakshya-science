import { connectDB } from "./DataBase/database.js";
import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { CustomError } from "./middlewares/custom.error.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routers/user.router.js";
import educationRouter from "./routers/education.router.js";
import path from "path";
dotenv.config();
const app = express();
// Applying Cors
// app.use(cors());

// middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json()); // PARSER JSON
app.use("/api/user", userRouter);
app.use("/api/education", educationRouter);

// handle error for api
app.get("/api/some-endpoint", (req, res) => {
  res.json({ message: "API route is working" });
});
app.use((req, res, next) => {
  next(new CustomError("API route not found", 404));
});
// global error handling
app.use((err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.status).json({ error: err.message });
  }
  console.error(err);
  return res.status(500).send("Something is wrong!");
});

//deployment
if (process.env.NODE_ENV === "production") {
  // Get the directory path of the current module
  const dirPath = path.resolve();

  // Serve static files
  app.use(express.static("frontend/dist"));

  // Catch-all route to serve index.html
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(dirPath, "frontend", "dist", "index.html"));
  });
}
// port
app.listen(process.env.PORT, () => {
  console.log(`Listening ON port ${process.env.PORT}`);
  // DataBase Connectivity
  connectDB();
});
