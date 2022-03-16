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
  console.log(loggedUser);
  (async () => {
    const token = localStorage.getItem("token");
    if (token) {
      loggedUser = true;
      const userData: payloadInterface = await jwtDecode(token);
      console.log(loggedUser);
      console.log("token");
      setUserName(userData.name);
    }
  })();

  return (
    <>
      <ul className="flex flex-row bg-neutral-50 h-[4.5rem] w-screen pl-9 pr-9 justify-between  items-center z-10 fixed">
        <li>
          <Link to="/home">
            <div className="flex flex-row w-9 h-auto justify-between items-center">
              <img src="cositoNaranja.svg" alt="orange thingy pet" />
              <span className="font-bold ml-2 text-lg">Codespace</span>
            </div>
          </Link>
        </li>

        <ul className="flex flex-row  justify-between items-center">
          <li className=" invisible md:visible">
            <Link to="/about">About</Link>
          </li>
          {loggedUser ? (
            <li className="p-4">
              <div className="group relative">
                <button className="text-blueSpace px-6 first-letter:uppercase">
                  {userName}
                </button>
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
                          navigate("/login");
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
              <li>
                <Link to="/login">
                  <div className=" rounded-3xl w-28 h-8 flex justify-center ml-3 mr-3 items-center">
                    <span className="text-blueSpace">Login</span>
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/sign-in">
                  <div className="bg-blueSpace rounded-3xl w-28 h-8 flex justify-center ml-3 mr-3 items-center">
                    <span className="text-white">Register</span>
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
