import { useFormik } from "formik";
import { Link } from "react-router-dom";

const GenericCardCreate = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      textCode: "",
      language: "",
    },
    onSubmit: ({ title, textCode, language }) => {
      console.log([title, textCode, language]);
    },
  });
  return (
    <div className="bg-white h-96 rounded-2xl shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-medium">Create a snippet</h2>
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

          <label htmlFor="language-select"></label>
          <select
            className="focus:outline-none"
            name="language"
            id="language-select"
            onChange={formik.handleChange}
          >
            <option value="" disabled hidden>
              Language
            </option>
            <option className="focus:outline-none" value="JavaScript">
              JavaScript
            </option>
            <option value="TypeScript">TypeScript</option>
          </select>
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

export default GenericCardCreate;
