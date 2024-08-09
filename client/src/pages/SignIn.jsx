import React, { useEffect, useState } from "react";
import { Button, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  loginSuccess,
  loginFailure,
  clearMessages,
} from "../redux/educationSlice.js";
export default function SignIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { error, successMessage, user } = useSelector(
    (state) => state.education
  );
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(clearMessages());

    if (!email || !password) {
      dispatch(loginFailure("Email and password are required."));
      return;
    }

    try {
      const response = await fetch("/api/user/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const result = await response.json();
        dispatch(loginFailure(result.message || "Login failed."));
        return;
      }

      const result = await response.json();

      dispatch(loginSuccess(result));
      navigate("/");
    } catch (error) {
      dispatch(loginFailure("An error occurred. Please try again."));
    }
  };

  useEffect(() => {
    // Set a timer to clear messages after 10 seconds
    const timer = setTimeout(() => {
      dispatch(clearMessages());
    }, 10000);

    // Cleanup function to clear the timer
    return () => clearTimeout(timer);
  }, [dispatch]);

  return (
    <div className="py-36 flex flex-col justify-center items-center">
      <div className="shadow-lg p-12 rounded-xl w-full max-w-md">
        <h2 className="text-3xl text-[#0e7490] font-semibold text-center">
          Login Account
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 pt-8">
          <div>
            <Label htmlFor="email" value="Your Email" />
            <TextInput
              id="email"
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="password" value="Your Password" />
            <TextInput
              id="password"
              type="password"
              placeholder="**********"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          {error && (
            <div className="text-red-500 bg-red-50 p-2 rounded">
              <span className="font-medium">Error:</span> {error}
            </div>
          )}
          {successMessage && (
            <div className="text-green-500 bg-green-50 p-2 rounded">
              <span className="font-medium">Success:</span> {successMessage}
            </div>
          )}
          <div className="flex justify-between items-center">
            <a href="/signup" className="text-[#0e7490] underline">
              Don&apos;t have an account? Signup
            </a>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
