import { useEffect } from "react";
import { MdAdd, MdEdit } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import userInterface from "../../redux/interfaces/userInterface";
import { RootState } from "../../redux/reducers";
import { loadUserSnippetCollectionThunk } from "../../redux/thunks/userThunk";
import SnippetCollectionCard from "../SnippetCollectionCard/SnippetCollectionCard";

const GenericCard: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUserSnippetCollectionThunk);
  }, [dispatch]);

  const userData: userInterface = useSelector((state: RootState) => state.user);

  return (
    <div className="bg-white h-96 rounded-2xl shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-medium">My snippet collections</h2>
      <ul>
        {userData.snippetsCollection.map(({ title, language }) => (
          <SnippetCollectionCard
            title={title}
            language={language}
            key={title}
          />
        ))}
      </ul>
      <ul className="flex flex-row h-16 items-end justify-between justify-self-end">
        <li className="ml-6">1 of 14</li>
        <ul className="flex flex-row  w-18  items-center justify-between text-3xl text-blueSpace">
          <MdEdit className="mr-6" />
          <MdAdd className="mr-6 text-4xl" />
        </ul>
      </ul>
    </div>
  );
};

export default GenericCard;
