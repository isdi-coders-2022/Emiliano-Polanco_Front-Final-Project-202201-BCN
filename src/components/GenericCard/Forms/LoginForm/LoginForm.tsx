import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (credentials) => {
      console.log("Hellow there");
    },
  });
  return (
    <div className="bg-white w-2/3 h-2/3 rounded-2xl shadow-md p-6 flex flex-col">
      <h2 className="text-2xl font-medium">Login</h2>
      <form className="h-full pt-8" onSubmit={formik.handleSubmit}>
        <div className="flex flex-row justify-between h-1/6 items-center text-xl">
          <div className="flex flex-row w-full">
            <label htmlFor="title">Username</label>
            <input
              className="focus:outline-none pl-3 w-full"
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <button
          className="bg-blueSpace rounded-3xl text-white w-28 h-8 flex justify-center ml-3 mr-3 items-center"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
