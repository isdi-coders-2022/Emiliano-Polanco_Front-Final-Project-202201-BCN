import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import userInterface from "../../redux/interfaces/userInterface";
import { RootState } from "../../redux/reducers";

const HomePage = () => {
  let navigate = useNavigate();

  const userState: userInterface = useSelector(
    (state: RootState) => state.user
  );
  useEffect(() => {
    if (userState.name !== "New exited User") {
      navigate("/home");
    }
  }, [userState.name, navigate]);

  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundWaves.png"
        alt="background"
      />
      <NavigationBar />
      <div
        className={`flex flex-col justify-center h-[calc(100vh-4.5rem)] p-12`}
      >
        <div>
          <button>JS</button>
          <button>TS</button>
        </div>
        <h2 className="text-3xl">Pick a language and start typing</h2>
        <div className="block flex flex-row">
          <button className=" bg-blueSpace rounded-3xl w-28 h-8 flex justify-center ml-3 mr-3 items-center text-white">
            Practice
          </button>
          <p className="w-max-40">
            Go type with our selected collection of snippets or create your own
          </p>
        </div>
        <div>
          <button>Go online</button>
          <p>Challenge people around the world to see whos the fastest coder</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
