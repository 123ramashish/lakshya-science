import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

export default function Dashboard() {
  return (
    <>
      <div className=" flex flex-col pt-40">
        <h2 className="text-[#0e7490] text-3xl font-bold text-center">
          Welcome to Dashboard
        </h2>
        <div className="flex flex-wrap justify-center items-center my-12 gap-12">
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Students:
            </h5>
          </Card>
          <Card href="#" className="max-w-sm">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Total Achivement:
            </h5>
          </Card>
        </div>
        <div className="flex flex-wrap justify-center items-center my-12 gap-12">
          <Button>Edit Banner</Button>
          <Button>Edit Achivement</Button>
          <Button>Edit Class</Button>
          <Button>Edit Student</Button>
          <Button>Edit Teacher</Button>
          <Button>Edit Result</Button>
        </div>
      </div>
    </>
  );
}
