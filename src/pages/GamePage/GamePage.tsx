import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import InputGame from "../../components/InputGame/InputGame";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import { RootState } from "../../redux/reducers";
import { GetSnippet, getSnippetGame } from "../../redux/thunks/gameThunk";

const GamePage = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const url = useLocation();
  const language = url.pathname.split("/")[2];
  useEffect(() => {
    dispatch(getSnippetGame({ language, id: params.id } as GetSnippet));
  }, [dispatch, language, params.id]);
  const gameState = useSelector((state: RootState) => state.game);
  const snippet = gameState.snippet;
  console.log(snippet.textCode);
  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="/backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className={`grid grid-cols-6 h-[calc(100vh-4.5rem)] p-12`}>
        <div>
          <div className="bg-yellowSpace rounded-2xl h-44 w-24 -translate-y-16 flex items-end p-3">
            <span className="text-2xl">Start typing</span>
          </div>
          <div className="w-10 my-10 ">
            <p className="text-4xl font-semibold text-gray-600 pl-2">48 wpm</p>
          </div>
          <div className="w-10 my-10 ">
            <p className="text-4xl font-semibold text-gray-600 pl-2">
              98% accur.
            </p>
          </div>
        </div>
        <div className="col-span-5">
          <InputGame text={snippet.textCode} />
        </div>
      </div>
    </>
  );
};

export default GamePage;
