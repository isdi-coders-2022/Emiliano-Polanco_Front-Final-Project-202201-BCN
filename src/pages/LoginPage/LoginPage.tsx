import { Link } from "react-router-dom";
import LoginForm from "../../components/Forms/LoginForm/LoginForm";

const LoginPage = () => {
  return (
    <>
      <ul className="flex flex-row  bg-slate-50 h-16 w-screen pl-9 pr-9 justify-between  items-center z-10 fixed top-0">
        <li>
          <Link to="/home">
            <div className="flex flex-row w-9 h-auto justify-between items-left">
              <img src="cositoNaranja.svg" alt="orange thingy pet" />
              <span className="font-bold ml-2 text-lg">Codespace</span>
            </div>
          </Link>
        </li>
      </ul>
      <div className={`flex justify-center items-center  pt-24`}>
        <img
          className="w-screen h-auto absolute -z-10"
          src="backgroundWaves.svg"
          alt="background"
        />
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
