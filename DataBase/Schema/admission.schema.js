// DataBase/Schema/admission.schema.js
import mongoose from "mongoose";

const admissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  fathername: {
    type: String,
    required: true,
  },
  mothername: {
    type: String,
    required: true,
  },
  classes: {
    type: String,
    required: true,
  },
  address: {
    type: [String],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  DOB: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

const Admission = mongoose.model("Admission", admissionSchema);

export default Admission;
