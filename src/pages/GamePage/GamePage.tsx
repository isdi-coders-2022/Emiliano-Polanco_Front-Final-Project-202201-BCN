import { motion } from "framer-motion";
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
        <div
          className={`grid md:grid-cols-6 grid-cols-1 h-[calc(100vh-4.5rem)] p-12`}
        >
          <div className="">
            <div className="bg-yellowSpace rounded-2xl md:h-44 md:w-32  -translate-y-16  md:pt-0 pt-5 justify-center flex md:items-end p-3">
              <span className="text-xl ">{snippet.title}</span>
            </div>
            <div className="w-10 md:my-10  my-0  md:visible invisible">
              <p className="md:text-7xl text-xs font-semibold text-gray-600 pl-2 ">
                {snippet.language === "JavaScript" ? "JS" : "TS"}
              </p>
            </div>
          </div>
          <div className="col-span-5">
            <InputGame text={snippet.textCode} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default GamePage;
