import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { updateStateUserAction } from "../../redux/actions/actionCreators/actionCreatorUser";
import userInterface from "../../redux/interfaces/userInterface";
import { RootState } from "../../redux/reducers";
import guestUser from "../../redux/thunks/utils/guesUser";

const NavigationBar: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData: userInterface = useSelector((state: RootState) => state.user);
  const activeUser: boolean = userData.name !== "New exited User";
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

        <ul className="flex flex-row w-60 justify-between items-center">
          <li className=" invisible md:visible">
            <Link to="/about">About</Link>
          </li>
          {activeUser ? (
            <li className="p-4">
              <div className="group relative">
                <button className="text-blueSpace px-6 first-letter:uppercase">
                  {userData.name}
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
            <li>
              <Link to="/login">
                <div className="bg-blueSpace rounded-3xl w-28 h-8 flex justify-center ml-3 mr-3 items-center">
                  <span className="text-white">Login</span>
                </div>
              </Link>
            </li>
          )}
        </ul>
      </ul>
      <div className="h-[4.5rem]"></div>
    </>
  );
};

export default NavigationBar;
