import { configureStore } from "@reduxjs/toolkit";
import educationReducer from "./educationSlice.js";
import admissionReducer from "./admissionSlice.js";
import resultReducer from "./resultSlice.js";
const store = configureStore({
  reducer: {
    education: educationReducer,
    admission: admissionReducer,
    result: resultReducer,
  },
});

export default store;
