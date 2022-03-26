import jwtDecode from "jwt-decode";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateStateUserAction } from "../../redux/actions/actionCreators/actionCreatorUser";

import guestUser from "../../redux/thunks/utils/guesUser";
import { payloadInterface } from "./PayloadInterface";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let loggedUser: boolean = false;
  const [userName, setUserName] = useState("none");

  (async () => {
    const token = localStorage.getItem("token");
    if (token) {
      loggedUser = true;
      const userData: payloadInterface = await jwtDecode(token);

      setUserName(userData.name);
    }
  })();

  return (
    <>
      <ul className="flex flex-row bg-neutral-50 h-[4.5rem] w-screen pl-9 pr-9 justify-between  items-center z-50 fixed shadow-md">
        <li>
          <Link to="/">
            <div className="flex flex-row w-9 h-auto justify-between items-center">
              <img
                src="/cositoNaranja.svg"
                className="w-10 h-10 pt-1"
                alt="orange thingy pet"
              />
              <span className="font-bold ml-2 text-xl">Codespace</span>
            </div>
          </Link>
        </li>

        <ul className="flex flex-row  justify-between items-center">
          <li className=" invisible md:visible mx-4">
            <Link to="/" className="font-medium">
              About
            </Link>
          </li>
          {loggedUser ? (
            <li className="p-4">
              <div className="group relative">
                <Link
                  to="/profile"
                  className="text-blueSpace px-6 first-letter:uppercase font-medium"
                >
                  {userName}
                </Link>
                <nav
                  tabIndex={0}
                  className=" invisible bg-orange-100 rounded  absolute left-0 top-full transition-all opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1"
                >
                  <ul className="py-1">
                    <li>
                      <Link
                        to="/"
                        onClick={(event) => {
                          event.preventDefault();
                          dispatch(updateStateUserAction(guestUser));
                          localStorage.removeItem("token");
                          navigate("/");
                        }}
                        className="block px-4 py-2 hover:bg-orange-200"
                      >
                        Log out
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </li>
          ) : (
            <>
              <li className="mx-4 md:visible invisible">
                <Link to="/login">
                  <div className=" border border-gray-400 rounded-3xl md:w-28 h-10 flex justify-center mx-4 items-center">
                    <span className="text-blue-700 font-medium">Login</span>
                  </div>
                </Link>
              </li>
              <li className="mx-4">
                <Link to="/sign-in">
                  <div className="bg-blueSpace rounded-3xl w-28 h-10 flex justify-center  items-center">
                    <span className="text-white font-medium">Register</span>
                  </div>
                </Link>
              </li>
            </>
          )}
        </ul>
      </ul>
      <div className="h-[4.5rem]"></div>
    </>
  );
};

export default NavigationBar;
