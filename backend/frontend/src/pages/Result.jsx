import { Button, Card, Label, Modal, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resultSuccess, resultFailure } from "../redux/resultSlice.js";
import { BeatLoader } from "react-spinners";

export default function Result() {
  const { user } = useSelector((state) => state.education);

  const dispatch = useDispatch();
  const { result, resultError, resultLoading } = useSelector(
    (state) => state.result
  );
  const [openModal, setOpenModal] = useState(false);
  const [name, setName] = useState("");
  const [className, setClassName] = useState("");
  const [resultValue, setResult] = useState("");
  const [resultMessage, setResultMessage] = useState(false);

  const handleAddResult = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/education/result", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, className, result: resultValue }),
      });

      if (!response.ok) {
        dispatch(
          resultFailure("Network response was not ok or something went wrong")
        );
        return;
      }

      const resultMessage = await response.json();
      dispatch(resultSuccess(resultMessage));
      setResultMessage(true);

      setOpenModal(false);
      setName("");
      setClassName("");
      setResult("");
      setTimeout(() => {
        setResultMessage(false);
      }, 5000);
    } catch (error) {
      dispatch(resultFailure("An error occurred while adding the result"));
    }
  };
  useEffect(() => {
    // Define an async function inside useEffect
    const fetchResults = async () => {
      try {
        const response = await fetch("/api/education/result", {
          method: "GET",
        });

        if (!response.ok) {
          dispatch(
            resultFailure("Network response was not ok or something went wrong")
          );
          return;
        }

        const data = await response.json();
        await dispatch(resultSuccess(data));
      } catch (error) {
        dispatch(resultFailure("An error occurred while fetching the results"));
      }
    };

    // Call the async function
    fetchResults();
  }, [dispatch]);
  console.log(result, typeof result);

  return (
    <>
      {resultLoading ? (
        <BeatLoader
          color="#59e3ef"
          className="py-72 text-center flex items-center"
        />
      ) : (
        <div className="p-36 m-auto">
          <div>
            {user && (
              <Button
                onClick={() => setOpenModal(true)}
                className="my-4 float-right"
              >
                Add More Result
              </Button>
            )}
          </div>
          <div className="flex flex-wrap justify-normal items-center gap-8">
            {result.length > 0 ? (
              result.map((item) => (
                <Card className="max-w-sm ml-44" key={item._id}>
                  <div className="flex flex-col items-center pb-10">
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                      {item.name}
                    </h5>

                    <span>{item.className}</span>
                    <span>{item.result}</span>
                  </div>
                </Card>
              ))
            ) : (
              <div>No results available</div>
            )}
          </div>

          <Modal
            show={openModal}
            size="md"
            onClose={() => setOpenModal(false)}
            popup
          >
            <Modal.Header />
            {resultError && (
              <div
                className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                role="alert"
              >
                <span className="font-medium">Danger alert!</span> {resultError}
              </div>
            )}
            {resultMessage && (
              <div
                className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400"
                role="alert"
              >
                <span className="font-medium">Result added successful</span>
              </div>
            )}
            <Modal.Body>
              <div className="space-y-6">
                <h3 className="text-xl text-center font-medium text-gray-900 dark:text-white">
                  Add Result
                </h3>
                <form onSubmit={handleAddResult}>
                  <div className="my-4">
                    <div className="mb-2 block">
                      <Label htmlFor="name" value="Name" />
                    </div>
                    <TextInput
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                  <div className="my-4">
                    <div className="mb-2 block">
                      <Label htmlFor="class" value="Class" />
                    </div>
                    <TextInput
                      id="class"
                      value={className}
                      onChange={(e) => setClassName(e.target.value)}
                      type="text"
                      required
                    />
                  </div>
                  <div className="my-4">
                    <div className="mb-2 block">
                      <Label htmlFor="result" value="Result" />
                    </div>
                    <TextInput
                      id="result"
                      value={resultValue}
                      onChange={(e) => setResult(e.target.value)}
                      type="text"
                      required
                    />
                  </div>

                  <div className="w-full my-8">
                    <Button type="submit">Add</Button>
                  </div>
                </form>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      )}
    </>
  );
}
