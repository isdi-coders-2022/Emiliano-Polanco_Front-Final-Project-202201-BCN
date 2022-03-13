import { Link } from "react-router-dom";

const NavigationBar: React.FC = () => {
  return (
    <>
      <ul className="flex flex-row  bg-slate-50 h-16 w-screen pl-9 pr-9 justify-between  items-center z-10 fixed">
        <li>
          <Link to="/home">
            <div className="flex flex-row w-9 h-auto justify-between items-center">
              <img src="cositoNaranja.svg" alt="orange thingy pet" />
              <span className="font-bold ml-2 text-lg">Codespace</span>
            </div>
          </Link>
        </li>
        <ul className="flex flex-row w-60 justify-between items-center">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">
              <div className="bg-blueSpace rounded-3xl w-28 h-8 flex justify-center ml-3 mr-3 items-center">
                <span className="text-white">Login</span>
              </div>
            </Link>
          </li>
        </ul>
      </ul>
    </>
  );
};

export default NavigationBar;
