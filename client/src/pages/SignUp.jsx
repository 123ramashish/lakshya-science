import { useEffect, useState } from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import {
  signupSuccess,
  signupFailure,
  clearMessages,
} from "../redux/educationSlice.js";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const { error, successMessage } = useSelector((state) => state.education);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    classes: "",
    subject: "", // Keep as a string initially
    address: "", // Keep as a string initially
    password: "",
    teacher: false, // Default value for checkbox
  });

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({ ...formData, [id]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert subject and address to arrays
    const subjectsArray = formData.subject
      .split(",")
      .map((item) => item.trim());
    const addressesArray = formData.address
      .split(",")
      .map((item) => item.trim());

    const dataToSend = {
      ...formData,
      subject: subjectsArray,
      address: addressesArray,
    };
    console.log(dataToSend);
    try {
      const response = await fetch("/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      });

      const data = await response.json();

      if (response.ok) {
        // Handle successful response
        dispatch(signupSuccess(data));
        navigate("/signin");
      } else {
        // Handle error response
        dispatch(signupFailure(data.message));
        console.error("Error:", data.message);
      }
    } catch (error) {
      dispatch(signupFailure(error.message));
      console.error("Request failed:", error);
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
    <>
      <div className="p-20"></div>
      <div className="space-y-6 max-w-lg flex flex-col m-auto shadow-lg p-12 mb-12">
        {error && (
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium">Signup Failed</span> {error}
          </div>
        )}
        {successMessage && (
          <div
            className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
            role="alert"
          >
            <span className="font-medium">Congratulation</span> {successMessage}
          </div>
        )}
        <h3 className="text-xl font-semibold text-center text-[#0e7490] dark:text-white">
          Register Account
        </h3>

        <form onSubmit={handleSubmit}>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="name" value="Your name" />
            </div>
            <TextInput
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email" value="Your email" />
            </div>
            <TextInput
              id="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="phone" value="Your Phone Number" />
            </div>
            <TextInput
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="class" value="Your class" />
            </div>
            <TextInput
              id="class"
              value={formData.class}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="subject" value="Subjects (comma separated)" />
            </div>
            <TextInput
              id="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g., Math, Science"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Addresses (comma separated)" />
            </div>
            <TextInput
              id="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="e.g., 123 Main St, Apt 4B"
              required
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput
              id="password"
              type="password"
              placeholder="***********"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex items-center gap-2 py-4">
            <Checkbox
              id="teacher"
              checked={formData.teacher}
              onChange={handleChange}
            />
            <Label htmlFor="teacher">Are you a teacher</Label>
          </div>
          <div>
            <a href="/signin">
              Already have accound?{" "}
              <span className="underline text-[#0e7490]">signin</span>
            </a>
          </div>
          <div className="w-full flex justify-center mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  );
}
