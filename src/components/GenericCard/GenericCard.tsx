import userInterface from "../../redux/interfaces/userInterface";

import SnippetCollectionCard from "../SnippetCollectionCard/SnippetCollectionCard";
import { MdAdd, MdEdit } from "react-icons/md";
import snippetInterface from "../../redux/interfaces/snippetInterface";

interface GenericCardProps {
  userData: userInterface;
}

const GenericCard = ({ userData }: GenericCardProps) => {
  const snippets = userData.snippetsCollection as snippetInterface[];
  return (
    <div className="bg-white h-96 rounded-2xl shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-medium">My snippet collections</h2>
      <ul className="overflow-y-scroll">
        {snippets.map(({ title, language, _id }) => (
          <SnippetCollectionCard title={title} language={language} key={_id} />
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
