import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  classContentRequest,
  classContentSuccess,
  classContentFailure,
} from "../redux/resultSlice.js";

export default function SubClass() {
  const { classId } = useParams(); // Assuming your URL parameter is named 'id'
  const { classContentError, classContent, classContentLoading } = useSelector(
    (state) => state.result
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubclassData = async () => {
      dispatch(classContentRequest()); // Indicate that a request is in progress
      try {
        const response = await fetch(`/api/education/class/${classId}`, {
          method: "GET",
        });

        if (!response.ok) {
          dispatch(classContentError("Something went wrong"));
          return;
        }

        const data = await response.json();
        console.log(data);
        dispatch(classContentSuccess(data));
      } catch (error) {
        dispatch(classContentFailure(error.message));
      }
    };

    fetchSubclassData();
  }, [dispatch, classId]); // Add `id` to the dependency array
  if (classContentLoading) {
    return (
      <BeatLoader
        color="#59e3ef"
        className="py-72 text-center flex items-center"
      />
    );
  }

  const {
    teachers = [],
    students = [],
    subjects = [],
    results = [],
  } = classContent || {};
  console.log(subjects);
  return (
    <div className="m-auto flex flex-col justify-center items-center w-full pt-16">
      <div className="m-auto flex flex-col flex-wrap gap-8 w-full p-16 my-4 items-center">
        <div className="flex justify-center items-center">
          <h2 className="text-center font-semibold text-2xl font-serif">
            Teachers
          </h2>
        </div>
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <Card
              key={teacher._id} // Ensure `id` is unique
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/images/blog/image-1.jpg" // Optional fallback image
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {teacher.name || "No Name Provided"}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {teacher.email}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Class:
                {teacher.classes &&
                Array.isArray(teacher.classes) &&
                teacher.classes.length > 0
                  ? teacher.classes.join(", ")
                  : "No Classes"}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Subject:{" "}
                {teacher.subject &&
                Array.isArray(teacher.subject) &&
                teacher.subject.length > 0
                  ? teacher.subject.join(", ")
                  : "No Subjects"}
              </p>
            </Card>
          ))
        ) : (
          <p>No teachers available</p>
        )}
      </div>

      <div className="m-auto flex flex-col flex-wrap gap-8 w-full p-16 my-12 items-center">
        <h2 className="text-center font-semibold text-2xl font-serif">
          Students
        </h2>
        {students.length > 0 ? (
          students.map((student) => (
            <Card
              key={student._id} // Ensure `id` is unique
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/images/blog/image-1.jpg" // Optional fallback image
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {student.name || "No Name Provided"}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Result: {student.result || "No Result"}
              </p>
            </Card>
          ))
        ) : (
          <p>No students available</p>
        )}
        <p>Total Students: {students.length}</p>
      </div>

      <div className="m-auto flex flex-col flex-wrap gap-8 w-full p-16 my-4 items-center">
        <h2 className="text-center font-semibold text-2xl font-serif">
          Subjects
        </h2>
        <ul className="text-3xl font-bold p-8 text-cyan-400 flex flex-wrap gap-12">
          {subjects &&
            subjects.map((sub, index) => {
              // Capitalize the first letter and keep the rest of the string unchanged
              const capitalizedSub =
                sub.charAt(0).toUpperCase() + sub.slice(1).toLowerCase();
              return <li key={index}>{capitalizedSub}</li>;
            })}
        </ul>
      </div>

      <div className="m-auto flex flex-col flex-wrap gap-8 w-full p-16 my-12 items-center">
        <h2 className="text-center font-semibold text-2xl font-serif">
          Results
        </h2>
        {results.length > 0 ? (
          results.map((result) => (
            <Card
              key={result._id} // Ensure `id` is unique
              className="max-w-sm"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc="/images/blog/image-1.jpg" // Optional fallback image
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {result.name || "No Name Provided"}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Class: {result.className || "No Class"}
              </p>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Result: {result.result || "No Result"}
              </p>
            </Card>
          ))
        ) : (
          <p>No results available</p>
        )}
      </div>
    </div>
  );
}
