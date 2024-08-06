import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: [], // Make sure this is an array
  classContent: null,
  resultLoading: false,
  classContentLoading: false,
  resultError: null,
  classContentError: null,
};

const resultSlice = createSlice({
  name: "result",
  initialState,
  reducers: {
    resultRequest: (state) => {
      state.resultLoading = true;
      state.resultError = null;
    },
    resultSuccess: (state, action) => {
      state.result = action.payload; // Replace the array with new data
      state.resultLoading = false;
      state.resultError = null;
    },
    resultFailure: (state, action) => {
      state.resultLoading = false;
      state.resultError = action.payload;
    },
    classContentRequest: (state) => {
      state.classContentLoading = true;
      state.classContentError = null;
    },
    classContentSuccess: (state, action) => {
      state.classContent = action.payload;
      state.classContentLoading = false;
      state.classContentError = null;
    },
    classContentFailure: (state, action) => {
      state.classContentLoading = false;
      state.classContentError = action.payload;
    },
  },
});

export const {
  resultRequest,
  resultSuccess,
  resultFailure,
  classContentRequest,
  classContentSuccess,
  classContentFailure,
} = resultSlice.actions;

export default resultSlice.reducer;
