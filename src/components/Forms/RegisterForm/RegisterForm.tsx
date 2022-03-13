import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const LoginForm = () => {
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
    <div className="bg-white w-[27rem] rounded-lg shadow-md p-12">
      <div>
        <div className="grid-rows-3">
          <h1 className="text-3xl font-medium mb-5 ">Log in</h1>
          <p className="text-gray-500 mb-9">
            Your can enter with your Google or Github account
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 border border-black align-middle rounded-md w-full flex flex-row justify-center items-center">
            <FcGoogle className="text-xl mr-3" />
            <a href="www.google.com">Log ing with Google</a>
          </div>
          <div className="h-10 border border-black align-middle mt-4 rounded-md w-full flex flex-row justify-center items-center">
            <AiFillGithub className="text-xl mr-3" />
            <a href="www.google.com">Log ing with Github</a>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-10 mb-8 ">
          <div className="w-5/12 h-px bg-gray-400 inline-block"></div>
          <span className="pb-1 text-gray-400">Or</span>
          <div className="w-5/12 h-px bg-gray-400 inline-block"></div>
        </div>
      </div>
      <form className="h-fit" onSubmit={formik.handleSubmit}>
        <label className="block" htmlFor="username">
          Username
        </label>
        <input
          className="border border-black rounded-md block w-full h-9 mt-3"
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
        />
        <div className="flex justify-between mt-4">
          <label htmlFor="password">Password</label>
          <span className="text-blueSpace">Forgot password?</span>
        </div>
        <input
          className="border border-black rounded-md block w-full h-9 mt-3"
          type="password"
          id="password"
          name="password"
          onChange={formik.handleChange}
        />

        <button
          className="bg-blueSpace rounded-md text-white w-full h-10 mt-8 flex justify-center items-center"
          type="submit"
        >
          Login
        </button>
        <p className="mt-2 ">
          Dont have an account?{" "}
          <Link to="/sign-in" className="text-blueSpace">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
