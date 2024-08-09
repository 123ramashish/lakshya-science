import { createSlice } from "@reduxjs/toolkit";

// Load initial state from localStorage
const loadInitialState = () => {
  try {
    const serializedState = localStorage.getItem("educationState");
    if (serializedState === null) {
      return {
        user: null,
        isLoading: false,
        error: null,
        successMessage: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return { user: null, isLoading: false, error: null, successMessage: null };
  }
};

const initialState = loadInitialState();

const educationSlice = createSlice({
  name: "education",
  initialState,
  reducers: {
    signupRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.successMessage = null;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.successMessage = "Signup successful!";
      localStorage.setItem("educationState", JSON.stringify(state)); // Save to localStorage
    },
    signupFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.successMessage = null;
    },
    loginRequest: (state) => {
      state.isLoading = true;
      state.error = null;
      state.successMessage = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.successMessage = "Login successful!";
      localStorage.setItem("educationState", JSON.stringify(state)); // Save to localStorage
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.successMessage = null;
    },
    clearMessages: (state) => {
      state.successMessage = null;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.successMessage = null;
      state.error = null;
      localStorage.removeItem("educationState"); // Clear from localStorage
    },
    addmissionSuccess: (state) => {
      state.isLoading = false;
      state.error = null;
      state.successMessage = "Admission successful!";
    },
    addmissionFailure: (state) => {
      state.isLoading = false;
      state.error = "Failure to take admission";
      state.successMessage = null;
    },
  },
});

export const {
  addmissionSuccess,
  addmissionFailure,
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  clearMessages,
  logout,
} = educationSlice.actions;

export default educationSlice.reducer;
