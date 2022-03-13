import { useFormik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const RegisterForm = () => {
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
          <h1 className="text-3xl font-medium mb-5 ">Sign up</h1>
          <p className="text-gray-500 mb-9">
            Your can sign up with your Google or Github account
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 border border-black align-middle rounded-md w-full flex flex-row justify-center items-center">
            <FcGoogle className="text-xl mr-3" />
            <a href="www.google.com">Sign up with Google</a>
          </div>
          <div className="h-10 border border-black align-middle mt-4 rounded-md w-full flex flex-row justify-center items-center">
            <AiFillGithub className="text-xl mr-3" />
            <a href="www.google.com">Sign up with Github</a>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-10 mb-8 ">
          <div className="w-5/12 h-px bg-gray-400 inline-block"></div>
          <span className="pb-1 text-gray-400">Or</span>
          <div className="w-5/12 h-px bg-gray-400 inline-block"></div>
        </div>
      </div>
      <form className="h-fit" onSubmit={formik.handleSubmit}>
        <label className="block mt-4" htmlFor="name">
          Name
        </label>
        <input
          className="border border-black rounded-md block w-full h-9 mt-3"
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
        />
        <label className="block mt-4" htmlFor="email">
          Email
        </label>
        <input
          className="border border-black rounded-md block w-full h-9 mt-3"
          type="text"
          id="email"
          name="email"
          onChange={formik.handleChange}
        />
        <label className="block mt-4" htmlFor="username">
          Username
        </label>
        <input
          className="border border-black rounded-md block w-full h-9 mt-3"
          type="text"
          id="username"
          name="username"
          onChange={formik.handleChange}
        />
        <label className="block mt-4" htmlFor="password">
          Password
        </label>

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
          Sign up
        </button>
        <p className="mt-2 ">
          Already have an account?{" "}
          <Link to="/login" className="text-blueSpace">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;