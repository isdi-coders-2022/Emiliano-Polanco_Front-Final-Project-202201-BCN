import { useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const HomePage = () => {
  const [selectedProgramingLanguage, setSelectedProgramingLanguage] =
    useState("JavaScript");

  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className={`flex  justify-center h-[calc(100vh-4.5rem)] p-12`}>
        <div className="flex-col w-4/5">
          <div className="flex justify-center">
            <div className="flex items-center flex-col">
              <button
                onClick={() => {
                  setSelectedProgramingLanguage("JavaScript");
                }}
                className="h-20 w-20 bg-yellowSpace font-bold rounded-xl justify-end text-3xl flex mx-4"
              >
                <span className="pr-3 pb-3 self-end">JS</span>
              </button>
              <div
                className={`w-3/5 h-2 bg-gray-700 mt-2 rounded-md ${
                  selectedProgramingLanguage === "JavaScript"
                    ? "visible"
                    : "invisible"
                }`}
              ></div>
            </div>
            <div className="flex items-center flex-col">
              <button
                onClick={() => {
                  setSelectedProgramingLanguage("TypeScript");
                }}
                className="h-20 w-20 bg-blueSpace text-white font-bold rounded-xl justify-end text-3xl flex mx-4"
              >
                <span className="pr-3 pb-3 self-end">TS</span>
              </button>
              <div
                className={`w-3/5 h-2 bg-gray-700 mt-2 rounded-md ${
                  selectedProgramingLanguage === "TypeScript"
                    ? "visible"
                    : "invisible"
                }`}
              ></div>
            </div>
          </div>
          <h2 className="text-6xl w-[34rem] my-20">
            Pick a language and start typing
          </h2>
          <div className=" flex items-center mt-5">
            <Link
              to="/game"
              className=" bg-blueSpace rounded-3xl w-60 h-11 flex justify-center ml-3 mr-3 items-center text-white font-medium text-xl"
            >
              Practice
            </Link>
            <p className="w-72 text-lg ml-20">
              Go type with our selected collection of snippets or create your
              own
            </p>
          </div>
          <div className=" flex items-center mt-5">
            <Link
              to="/game"
              className=" bg-blueSpace rounded-3xl w-60 h-11 flex justify-center ml-3 mr-3 items-center text-white font-medium text-xl"
            >
              Go online
            </Link>
            <p className="w-72 text-lg ml-20">
              Challenge people around the world to see whos the fastest coder
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
