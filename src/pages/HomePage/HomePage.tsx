import axios from "axios";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
const apiUrl = process.env.REACT_APP_API_URL;

const getRandomSnippet = async (language: string) => {
  const response = await axios.get(`${apiUrl}${language}`);
  return response.data;
};

const HomePage = () => {
  const [selectedProgramingLanguage, setSelectedProgramingLanguage] =
    useState("JavaScript");
  const [randomSnippet, setRandomSnippet] = useState({
    _id: "1",
    language: "JavaScript",
  });

  useEffect(() => {
    (async () => {
      const initalSnippet = await getRandomSnippet(selectedProgramingLanguage);
      setRandomSnippet(initalSnippet);
    })();
  }, [selectedProgramingLanguage]);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <img
          className="h-full  w-full fixed  -z-10 "
          src="/backgroundStains.png"
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
                  className={`h-20 w-20 bg-yellowSpace font-bold rounded-xl justify-end text-3xl flex mx-4 ${
                    selectedProgramingLanguage === "JavaScript"
                      ? "animate-pulse scale-110"
                      : "a"
                  } `}
                >
                  <span className="pr-3 pb-3 self-end">JS</span>
                </button>
              </div>
              <div className="flex items-center flex-col">
                <button
                  onClick={() => {
                    setSelectedProgramingLanguage("TypeScript");
                  }}
                  className={`h-20 w-20 bg-blueSpace font-bold rounded-xl  justify-end text-3xl flex mx-4 ${
                    selectedProgramingLanguage === "TypeScript"
                      ? "animate-pulse scale-110"
                      : "a"
                  } `}
                >
                  <span className="pr-3 pb-3 self-end text-white">TS</span>
                </button>
              </div>
            </div>
            <h2 className="text-6xl w-[34rem] my-20">
              Pick a language and start typing
            </h2>
            <div className=" flex items-center mt-5">
              <Link
                to="/game:id"
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
                to={`/game/${randomSnippet.language.toLowerCase()}/${
                  randomSnippet._id
                }`}
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
      </motion.div>
    </>
  );
};

export default HomePage;
