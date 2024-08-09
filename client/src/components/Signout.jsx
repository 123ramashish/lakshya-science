import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

export default function Signout() {
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const response = await fetch("/api/user/signout", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }

      // Clear local storage
      localStorage.removeItem("educationState");

      // Redirect to login page or home page after signout
      navigate("/");
    } catch (error) {
      console.error("Error signing out:", error);
      // Optionally show an error message to the user
    }
  };
  handleSignout();
  return <div className="flex justify-center items-center min-h-screen"></div>;
}
