import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import userInterface from "../../redux/interfaces/userInterface";
import { RootState } from "../../redux/reducers";

const LoginPage = () => {
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
      <div className="z-10 fixed top-0">
        <ul className="flex flex-row   backdrop-blur-lg  h-[4.5rem] w-screen pl-9 pr-9 justify-between  items-center ">
          <li>
            <Link to="/home">
              <div className="flex flex-row w-9 h-auto justify-between items-left">
                <img src="cositoNaranja.svg" alt="orange thingy pet" />
                <span className="font-bold ml-2 pt-1 text-lg">Codespace</span>
              </div>
            </Link>
          </li>
        </ul>
        <div className="h-px bg-slate-300 "></div>
      </div>
      <div className="h-[4.5rem]"></div>

      <div className={`flex justify-center  p-12`}>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
