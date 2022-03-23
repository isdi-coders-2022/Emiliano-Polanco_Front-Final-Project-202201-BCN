import userInterface from "../../redux/interfaces/userInterface";

import SnippetCollectionCard from "../SnippetCollectionCard/SnippetCollectionCard";
import { MdAdd, MdEdit } from "react-icons/md";
import snippetInterface from "../../redux/interfaces/snippetInterface";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
interface GenericCardProps {
  userData: userInterface;
}

const GenericCard = ({ userData }: GenericCardProps) => {
  const navigate = useNavigate();
  const [snippetsLanguage, setSnippetsLanguage] = useState("All");
  const [filterState, setFilterState] = useState(
    userData.snippetsCollection as snippetInterface[]
  );
  const [editState, setEditState] = useState(false);
  const path = editState ? "edit-snippet" : "profile";
  const [indexState, setIndexState] = useState(0);
  const pages = new Array(Math.ceil((filterState?.length as number) / 5)).fill(
    ""
  );
  useEffect(() => {
    setFilterState(userData.snippetsCollection as snippetInterface[]);
  }, [userData]);

  const snippets = (filterState as snippetInterface[]).slice(
    indexState,
    indexState + 5
  );
  return (
    <div className="bg-white h-[43rem] my-10 rounded-xl shadow-md md:p-10 p-7 flex flex-col relative">
      <h2 className="text-2xl font-medium">My snippet collections</h2>
      <ul className="flex justify-start py-5">
        <li
          className={`border flex justify-center items-center mr-4 rounded-lg px-3 text-gray-500 ${
            snippetsLanguage === "All" ? "bg-slate-200" : "a"
          }`}
        >
          <button
            onClick={() => {
              setSnippetsLanguage("All");
              setIndexState(0);
              setFilterState(userData.snippetsCollection as snippetInterface[]);
            }}
          >
            All
          </button>
        </li>
        <li
          className={`border flex justify-center items-center mr-4 rounded-lg px-3 text-gray-500 ${
            snippetsLanguage === "JavaScript" ? "bg-slate-200" : "a"
          }`}
        >
          <button
            onClick={() => {
              setIndexState(0);
              setFilterState(userData.snippetsJavaScript as snippetInterface[]);
              setSnippetsLanguage("JavaScript");
            }}
          >
            JavaScript
          </button>
        </li>
        <li
          className={`border flex justify-center items-center mr-4 rounded-lg px-3 text-gray-500 ${
            snippetsLanguage === "TypeScript" ? "bg-slate-200" : "a"
          }`}
        >
          <button
            onClick={() => {
              setIndexState(0);
              setFilterState(userData.snippetsTypeScript as snippetInterface[]);
              setSnippetsLanguage("TypeScript");
            }}
          >
            TypeScript
          </button>
        </li>
      </ul>
      <ul className="h-full">
        {!snippets.length ? (
          <div className="flex flex-col justify-center items-center h-full">
            <p className="text-gray-400 text-xl font-light mb-5">
              It looks like you don't have snippets for now
            </p>
            <img
              className="xl:h-80 md:60 h-52 opacity-60 "
              src="/dinosaur.png"
              alt="background"
            />
          </div>
        ) : (
          snippets.map(({ title, language, _id }) => (
            <Link
              to={`${path}?id=${_id}`}
              onClick={(event) => {
                if (!editState) {
                  event.preventDefault();
                  navigate(`/game/${language.toLowerCase()}/${_id}`);
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
          ))
        )}
      </ul>
      <ul className="flex flex-row h-16 items-end justify-between   w-[calc(100%-5rem)] absolute bottom-10 ">
        <ul className="flex ">
          {pages.map((element, index) => (
            <li
              onClick={() => {
                setIndexState(index * 5);
              }}
              className={`mx-4 w-7 h-7 flex justify-center items-center rounded hover:cursor-pointer ${
                indexState === index * 5 ? "bg-gray-200" : ""
              }`}
              key={index}
            >
              <span>{index + 1}</span>
            </li>
          ))}
        </ul>
        <ul className="flex flex-row  w-18  items-center justify-between text-3xl text-blueSpace">
          <button>
            <MdEdit
              className="mr-6 hover:cursor-pointer"
              onClick={() => {
                setEditState(!editState);
              }}
            />
          </button>

          <Link to="/create-snippet">
            <MdAdd className="mr-6 text-4xl" />
          </Link>
        </ul>
      </ul>
    </div>
  );
};

export default GenericCard;
