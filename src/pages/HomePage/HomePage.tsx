import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AboutInfo from "../../components/AboutInfo/AboutInfo";
import BenefitsInfo from "../../components/BenefitsInfo/BenefitsInfo";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { getRandomSnippet } from "./getRandomSnippet";

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
            <h2 className="text-6xl w-[34rem] my-20 font-medium">
              Pick a language and start exploring
            </h2>

            <div className=" flex items-center mt-5">
              <Link
                to={`/game/${randomSnippet.language.toLowerCase()}/${
                  randomSnippet._id
                }`}
                className=" bg-blueSpace rounded-3xl w-60 h-11 flex justify-center ml-3 mr-3 items-center text-white font-medium text-xl"
              >
                Let's go
              </Link>
              <p className="w-72 text-lg ml-10">
                See how peole around the globe thinks and writes code
              </p>
            </div>
          </div>
        </div>
        <AboutInfo></AboutInfo>
        <BenefitsInfo></BenefitsInfo>
      </motion.div>
    </>
  );
};

export default HomePage;
