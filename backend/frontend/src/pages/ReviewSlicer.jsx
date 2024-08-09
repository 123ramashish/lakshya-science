import { Carousel } from "flowbite-react";
import Review from "../components/Review";

export default function ReviewSlicer() {
  return (
    <div className="md:w-[1000px] flex flex-col items-center justify-center m-auto pt-8">
      <h2 className="text-2xl font-semibold text-center -mb-12 mt-8 text-[#0e7490]">
        User Reviews
      </h2>
      <Carousel className="rounded-none my-8">
        <Review />
        <Review />

        <Review />
      </Carousel>
    </div>
  );
}
