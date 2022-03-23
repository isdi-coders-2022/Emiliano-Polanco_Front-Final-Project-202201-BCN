import { Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { userRegisterDataInterface } from "../../../redux/thunks/interfaces/userRegisterDataInterface";
import { useDispatch } from "react-redux";
import {
  loginRegisterUserGoogleThunk,
  registerUserThunk,
} from "../../../redux/thunks/userCredentialsThunk";
import { AppStateInterface } from "../../../redux/interfaces/AppErrorStateInterface";
import { setSuccesStateOnAppActionCreator } from "../../../redux/actions/actionCreators/actionCreatorAppState";
import succesAppStateObject from "../../../redux/utils/succesAppStateObject";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";
import * as Yup from "yup";
interface RegisterFormProps {
  registerState: AppStateInterface;
}
const UserDataScheema = Yup.object().shape({
  name: Yup.string().required("Please put your name"),
  username: Yup.string().required("Dont forget your username"),
  password: Yup.string().required("A password seems like a good idea"),
  email: Yup.string().email("Invalid email").required("Please put your email"),
});

const RegisterForm = ({ registerState }: RegisterFormProps) => {
  const dispatch = useDispatch();
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
            <GoogleLogin
              clientId="444624699992-6j9qum8qhkajkclj2tc3nnifs0o88gqh.apps.googleusercontent.com"
              render={(renderProps) => (
                <button
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Sign up with Google
                </button>
              )}
              buttonText="Login"
              onSuccess={(response) => {
                const typedResponse = response as GoogleLoginResponse;
                dispatch(loginRegisterUserGoogleThunk(typedResponse.tokenId));
              }}
              onFailure={(response) => {}}
              cookiePolicy={"single_host_origin"}
            />
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
      {registerState.status === "ok" || (
        <div className="h-14 bg-red-50 rounded flex items-center mb-4">
          <p className="text-red-600  pl-3">{registerState.message}</p>
        </div>
      )}
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{
          name: "",
          username: "",
          password: "",
          email: "",
        }}
        onSubmit={(registerData) => {
          const userRegisterData: userRegisterDataInterface = {
            ...registerData,
            lastname: "none",
          };
          dispatch(registerUserThunk(userRegisterData));
        }}
        validationSchema={UserDataScheema}
      >
        {({ errors, touched }) => (
          <Form className="h-fit">
            <label className="block mt-4" htmlFor="name">
              Name
            </label>
            {!(errors.name && touched.name) || (
              <div className="h-11 bg-red-50 rounded flex items-center mb-4">
                <p className="text-red-600 text-sm pl-3">{errors.name}</p>
              </div>
            )}
            <Field
              className="border pl-3 border-black rounded-md block w-full h-9 mt-3"
              type="text"
              id="name"
              name="name"
            />
            <label className="block mt-4" htmlFor="email">
              Email
            </label>
            {!(errors.email && touched.email) || (
              <div className="h-11 bg-red-50 rounded flex items-center mb-4">
                <p className="text-red-600 text-sm pl-3">{errors.email}</p>
              </div>
            )}
            <Field
              className="border pl-3 border-black rounded-md block w-full h-9 mt-3"
              type="text"
              id="email"
              name="email"
            />
            <label className="block mt-4" htmlFor="username">
              Username
            </label>
            {!(errors.username && touched.username) || (
              <div className="h-11 bg-red-50 rounded flex items-center mb-4">
                <p className="text-red-600 text-sm  pl-3">{errors.username}</p>
              </div>
            )}
            <Field
              className="border pl-3 border-black rounded-md block w-full h-9 mt-3"
              type="text"
              id="username"
              name="username"
            />
            <label className="block mt-4" htmlFor="password">
              Password
            </label>
            {!(errors.password && touched.password) || (
              <div className="h-11 bg-red-50 rounded flex items-center mb-4">
                <p className="text-red-600 text-sm pl-3">{errors.password}</p>
              </div>
            )}
            <Field
              className="border pl-3 border-black rounded-md block w-full h-9 mt-3"
              type="password"
              id="password"
              name="password"
            />

            <button
              className="bg-blueSpace rounded-md text-white w-full h-10 mt-8 flex justify-center items-center"
              type="submit"
            >
              Sign up
            </button>
            <p className="mt-2 ">
              Already have an account?{" "}
              <Link
                to="/login"
                onClick={() => {
                  dispatch(
                    setSuccesStateOnAppActionCreator(succesAppStateObject)
                  );
                }}
                className="text-blueSpace"
              >
                Login
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;
