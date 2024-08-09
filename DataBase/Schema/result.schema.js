// result.schema.js
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    required: true,
  },
  result: {
    type: String,
    required: true,
  },
});

const Result = mongoose.model("Result", resultSchema);

export default Result;
