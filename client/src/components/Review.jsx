import React from "react";
import { Blockquote } from "flowbite-react";

export default function Review() {
  return (
    <>
      <div className="p-24 w-full ">
        <figure className="max-w-md flex flex-col justify-center items-center ">
          <Blockquote>
            <p className="text-xl  text-gray-900 dark:text-white ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Recusandae tenetur consectetur nulla, fugit commodi cupiditate
              nisi eaque repellat nostrum repellendus.
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-gray-900 dark:text-white">
                name
              </cite>
              <cite className="pl-3 text-sm text-gray-500 dark:text-gray-400">
                address
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </>
  );
}
