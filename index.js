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
import { fileURLToPath } from "url";
dotenv.config();

// resolving file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
// Applying Cors

// middleware
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.json()); // PARSER JSON
app.use("/api/user", userRouter);
app.use("/api/education", educationRouter);

//deployment

app.use(express.static(path.join(__dirname, "client/dist")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client/dist/index.html"))
);
// handle error for api

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

// port
app.listen(process.env.PORT, () => {
  console.log(`Listening ON port ${process.env.PORT}`);
  // DataBase Connectivity
  connectDB();
});
