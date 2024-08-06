import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  classes: {
    type: [String],
    required: true,
  },
  subject: {
    type: [String],
    required: true,
  },
  address: {
    type: [String],
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  teacher: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.model("User", userSchema);

export default User;
