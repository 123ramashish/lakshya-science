import Banner from "../components/Banner";
import ReviewSlicer from "./ReviewSlicer";
// import ShowMore from "react-show-more";
import { useEffect } from "react";
import { BeatLoader } from "react-spinners";
import { useDispatch, useSelector } from "react-redux";
import {
  classContentRequest,
  classContentSuccess,
  classContentFailure,
} from "../redux/resultSlice.js";
import { Card } from "flowbite-react";
export default function Home() {
  const { classContentError, classContent, classContentLoading } = useSelector(
    (state) => state.result
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSubclassData = async () => {
      dispatch(classContentRequest()); // Indicate that a request is in progress
      try {
        const response = await fetch("/api/education/home", {
          method: "GET",
        });

        if (!response.ok) {
          dispatch(classContentError("Something went wrong"));
          return;
        }

        const data = await response.json();
        dispatch(classContentSuccess(data));
      } catch (error) {
        dispatch(classContentFailure(error.message));
      }
    };

    fetchSubclassData();
  }, [dispatch]); // Add `id` to the dependency array
  if (classContentLoading) {
    return (
      <BeatLoader
        color="#59e3ef"
        className="py-72 text-center flex items-center"
      />
    );
  }

  const { teachers = [], students = [], results = [] } = classContent || {};
  return (
    <>
      <div className="py-28 flex flex-col justify-items-center">
        <Banner />
        <div className="py-4">
          <h2 className="text-2xl font-semibold text-[#0e7490] text-center mb-4">
            Our Teachers
          </h2>
          {/* <ShowMore
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
            > */}

          <div className="flex flex-wrap gap-8 py-4 m-auto justify-center items-center">
            {teachers.map((teacher) => (
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
            ))}
          </div>

          {/* </ShowMore> */}
        </div>
        <div className="py-4">
          <h2 className="text-2xl font-semibold text-[#0e7490] text-center mb-4">
            Our Students
          </h2>
          {/* <ShowMore
                lines={3}
                more='Show more'
                less='Show less'
                anchorClass=''
            > */}

          <div className="flex flex-wrap gap-8 py-4 justify-center items-center">
            {students.map((student) => (
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
            ))}
          </div>

          {/* </ShowMore> */}
        </div>
        <div className="py-4 flex flex-col justify-center items-center ">
          <h2 className="text-2xl font-semibold text-[#0e7490] text-center mb-4">
            Our Results
          </h2>

          <div className="flex flex-wrap gap-8 py-4 justify-center items-center">
            {results.map((result) => (
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
            ))}
          </div>

          <a href="/result" className="underline">
            See more
          </a>
        </div>
        <ReviewSlicer />
      </div>
    </>
  );
}
