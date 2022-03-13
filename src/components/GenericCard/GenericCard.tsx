import userInterface from "../../redux/interfaces/userInterface";

import SnippetCollectionCard from "../SnippetCollectionCard/SnippetCollectionCard";
import { MdAdd, MdEdit } from "react-icons/md";
import snippetInterface from "../../redux/interfaces/snippetInterface";
import { Link } from "react-router-dom";
import { useState } from "react";

interface GenericCardProps {
  userData: userInterface;
}

const GenericCard = ({ userData }: GenericCardProps) => {
  const [filterState, setFilterState] = useState(userData.snippetsCollection);
  const snippets = filterState as snippetInterface[];
  const [editState, setEditState] = useState(false);
  const path = editState ? "edit-snippet" : "profile";
  const cursorState = editState
    ? "hover:cursor-pointer"
    : "hover:cursor-default";

  return (
    <div className="bg-white  rounded-xl shadow-md p-10 flex flex-col">
      <h2 className="text-2xl font-medium">My snippet collections</h2>
      <ul className="flex justify-start py-5">
        <li className="border flex justify-center items-center mr-4 rounded-lg px-3 text-gray-500">
          <button
            onClick={() => {
              setFilterState(userData.snippetsCollection);
            }}
          >
            All
          </button>
        </li>
        <li className="border flex justify-center items-center mr-4 rounded-lg px-3 text-gray-500">
          <button
            onClick={() => {
              setFilterState(userData.snippetsJavaScript as snippetInterface[]);
            }}
          >
            JavaScript
          </button>
        </li>
        <li className="border flex justify-center items-center mr-4 rounded-lg px-3 text-gray-500">
          <button
            onClick={() => {
              setFilterState(userData.snippetsTypeScript as snippetInterface[]);
            }}
          >
            TypeScript
          </button>
        </li>
      </ul>
      <ul className="">
        {snippets.map(({ title, language, _id }) => (
          <Link
            className={cursorState}
            to={`${path}?id=${_id}`}
            onClick={(event) => {
              if (!editState) {
                event.preventDefault();
              }
            }}
            key={_id}
          >
            <SnippetCollectionCard
              title={title}
              language={language}
              editMode={editState}
            />
          </Link>
        ))}
      </ul>
      <ul className="flex flex-row h-16 items-end justify-between">
        <li className="ml-6">1 of 14</li>
        <ul className="flex flex-row  w-18  items-center justify-between text-3xl text-blueSpace">
          <MdEdit
            className="mr-6 hover:cursor-pointer"
            onClick={() => {
              setEditState(!editState);
            }}
          />
          <Link to="/create-snippet">
            <MdAdd className="mr-6 text-4xl" />
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default GenericCard;
