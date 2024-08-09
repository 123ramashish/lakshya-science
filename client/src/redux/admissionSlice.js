// redux/admissionSlice.js

import { createSlice } from "@reduxjs/toolkit";

const admissionSlice = createSlice({
  name: "admission",
  initialState: {
    formData: {
      fullName: "",
      fathername: "",
      mothername: "",
      address: "",
      phoneNumber: "",
      class: "",
      dob: "",
      gender: "",
    },
    errors: {},
  },
  reducers: {
    setFormData: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    clearErrors: (state) => {
      state.errors = {};
    },
  },
});

export const { setFormData, setErrors, clearErrors } = admissionSlice.actions;

export default admissionSlice.reducer;
