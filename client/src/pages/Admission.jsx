import { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  addmissionFailure,
  addmissionSuccess,
  clearMessages,
} from "../redux/educationSlice.js";
export default function Admission() {
  const navigate = useNavigate();

  const { error, successMessage } = useSelector((state) => state.education);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    fathername: "",
    mothername: "",
    address: "",
    phone: "",
    classes: "",
    DOB: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prevData) => ({ ...prevData, [name]: checked }));
    } else if (name === "address") {
      const addressArray = value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean);
      setFormData((prevData) => ({ ...prevData, address: addressArray }));
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/education/admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        dispatch(addmissionFailure());
        return;
      }

      const result = await response.json();
      dispatch(addmissionSuccess());
      console.log("Form submitted:", result.message);
      navigate("/");
    } catch (error) {
      dispatch(addmissionFailure());
      console.error("Error submitting form:", error);
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
    <div className="m-auto flex flex-col justify-center items-center w-full pt-36">
      <div className="p-4 shadow-lg">
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
        <h1 className="text-3xl font-bold text-center pb-4 text-cyan-500">
          Admission Form
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col flex-wrap gap-4 mt-4"
        >
          <div className="flex flex-wrap justify-between p-4">
            <div className="w-full">
              {/* Full Name Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="name"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Full Name:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Father's Name Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="fathername"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Father&apos;s Name:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="text"
                  id="fathername"
                  name="fathername"
                  value={formData.fathername}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Mother's Name Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="mothername"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Mother&apos;s Name:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="text"
                  id="mothername"
                  name="mothername"
                  value={formData.mothername}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Address Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="address"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Address:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="text"
                  id="address"
                  name="address"
                  placeholder="e.g: Brahampura,Madhubani"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="w-full">
              {/* Phone Number Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="phone"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Phone Number:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="99999999"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Class Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="classes"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Class:
                </label>
                <select
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  id="classes"
                  name="classes"
                  value={formData.class}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select class</option>
                  <option value="1">Class 1</option>
                  <option value="2">Class 2</option>
                  <option value="3">Class 3</option>
                  <option value="4">Class 4</option>
                  <option value="5">Class 5</option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>
              {/* Date of Birth Field */}
              <div className="flex flex-col mb-4">
                <label
                  htmlFor="DOB"
                  className="font-medium text-xl mr-2 font-sans"
                >
                  Date of Birth:
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="date"
                  id="DOB"
                  name="DOB"
                  value={formData.DOB}
                  onChange={handleChange}
                  required
                />
              </div>
              {/* Gender Field */}
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <h2 className="text-2xl font-bold">Gender:</h2>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="male" className="text-xl mr-2 font-sans">
                  Male
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="female" className="text-xl mr-2 font-sans">
                  Female
                </label>
                <input
                  className="p-2 rounded-md border-none outline-none bg-gray-400 shadow-md"
                  type="radio"
                  id="other"
                  name="gender"
                  value="other"
                  checked={formData.gender === "other"}
                  onChange={handleChange}
                  required
                />
                <label htmlFor="other" className="text-xl mr-2 font-sans">
                  Other
                </label>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
