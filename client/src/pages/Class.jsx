import { Link } from "react-router-dom";

export default function Class() {
  return (
    <>
      <div className="m-auto flex flex-col justify-center items-center w-full pt-36">
        <div className="flex flex-wrap p-12  rounded-lg m-12 gap-16 justify-center">
          <Link
            to="1"
            className="p-8 bg-blue-500 text-black text-2xl hover:bg-blue-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300 "
          >
            Class 1
          </Link>
          <Link
            to="2"
            className="p-8 bg-green-500 text-black text-2xl hover:bg-green-600  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 2
          </Link>
          <Link
            to="3"
            className="p-8 bg-pink-500 text-black text-2xl hover:bg-pink-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 3
          </Link>
          <Link
            to="4"
            className="p-8 bg-red-500 text-black text-2xl hover:bg-red-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 4
          </Link>
          <Link
            to="5"
            className="p-8 bg-sky-500 text-black text-2xl hover:bg-sky-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 5
          </Link>
          <Link
            to="6"
            className="p-8 bg-yellow-500 text-black text-2xl hover:bg-yellow-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 6
          </Link>
          <Link
            to="7"
            className="p-8 bg-amber-600 text-black text-2xl hover:bg-amber-700  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 7
          </Link>
          <Link
            to="8"
            className="p-8 bg-yellow-800 text-black text-2xl hover:bg-yellow-900  transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 8
          </Link>
          <Link
            to="9"
            className="p-8 bg-lime-400 text-black text-2xl hover:bg-lime-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 9
          </Link>
          <Link
            to="10"
            className="p-8 bg-emerald-400 text-black text-2xl hover:bg-emerald-500 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"
          >
            Class 10
          </Link>
        </div>
      </div>
    </>
  );
}
