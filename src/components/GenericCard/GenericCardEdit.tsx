import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { updateStateUserAction } from "../../redux/actions/actionCreators/actionCreatorUser";
import snippetInterface from "../../redux/interfaces/snippetInterface";
import userInterface from "../../redux/interfaces/userInterface";
import { RootState } from "../../redux/reducers";
import {
  deleteObjectInterface,
  deleteSnippetFromUserCollectionThunk,
  editObjectInterface,
  editSnippetGloballyThunk,
} from "../../redux/thunks/userThunk";

const GenericCardEdit = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const userData: userInterface = useSelector((state: RootState) => state.user);
  const search = useLocation().search;
  const snippetId = new URLSearchParams(search).get("id") as string;
  const snippetsCollection: snippetInterface[] =
    userData.snippetsCollection as snippetInterface[];
  const theSnippet = snippetsCollection.find(
    (snippet) => snippet._id === snippetId
  );
  const formik = useFormik({
    initialValues: {
      title: theSnippet?.title,
      textCode: theSnippet?.textCode,
    },
    onSubmit: (newData) => {
      const editedSnippet: snippetInterface = {
        title: newData.title as string,
        textCode: newData.textCode as string,
        language: theSnippet?.language as string,
      };
      const editObject: editObjectInterface = {
        snippetId: theSnippet?._id as string,
        updatedProperty: editedSnippet,
      };
      dispatch(editSnippetGloballyThunk(editObject));
      updateStateUserAction(userData);
      setTimeout(() => {
        navigate("/china");
      }, 500);
    },
  });
  return (
    <div className="bg-white w-2/3 h-2/3 rounded-2xl shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-medium">Edit your snippet</h2>
      <form className="h-full pt-8" onSubmit={formik.handleSubmit}>
        <div className="flex flex-row justify-between h-1/6 items-center text-xl">
          <div className="flex flex-row w-full">
            <label htmlFor="title">Title</label>
            <input
              className="focus:outline-none pl-3 w-full"
              type="text"
              id="title"
              name="title"
              placeholder="Reducer assembly"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
          </div>

          <span className="pr-10">{theSnippet?.language}</span>
        </div>
        <div className="bg-gray-400 w-40 h-0.5 rounded-sm"></div>
        <div className="h-4/6">
          <label htmlFor="textCode"></label>
          <textarea
            className="focus:outline-none pt-3 w-full h-full"
            placeholder="Here goes your code"
            id="textCode"
            name="textCode"
            onChange={formik.handleChange}
            value={formik.values.textCode}
          />
        </div>
        <div className="flex fle-row justify-between h-1/6 items-center">
          <Link to="/china">
            <span className="text-gray-400 pl-5">Return</span>
          </Link>
          <div className="flex fle-row justify-between">
            <button
              className="bg-red-400 rounded-3xl text-white w-28 h-8 flex justify-center ml-3 mr-3 items-center"
              type="button"
              onClick={() => {
                const deleteObject: deleteObjectInterface = {
                  language: theSnippet?.language as string,
                  id: snippetId,
                };
                dispatch(deleteSnippetFromUserCollectionThunk(deleteObject));
                setTimeout(() => {
                  navigate("/china");
                }, 500);
              }}
            >
              Delete
            </button>
            <button
              className="bg-blueSpace rounded-3xl text-white w-28 h-8 flex justify-center ml-3 mr-3 items-center"
              type="submit"
            >
              Done
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GenericCardEdit;
