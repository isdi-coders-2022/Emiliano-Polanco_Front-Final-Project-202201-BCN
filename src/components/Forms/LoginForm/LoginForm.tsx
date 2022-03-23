import { Field, Form, Formik } from "formik";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  loginRegisterUserGoogleThunk,
  loginUserThunk,
} from "../../../redux/thunks/userCredentialsThunk";
import { setSuccesStateOnAppActionCreator } from "../../../redux/actions/actionCreators/actionCreatorAppState";
import succesAppStateObject from "../../../redux/utils/succesAppStateObject";
import { AppStateInterface } from "../../../redux/interfaces/AppErrorStateInterface";
import * as Yup from "yup";
import GoogleLogin, { GoogleLoginResponse } from "react-google-login";

const CredentialsScheema = Yup.object().shape({
  username: Yup.string().required("Who are you?"),
  password: Yup.string().required("Where is your password?"),
});
interface LoginFormProps {
  loginState: AppStateInterface;
}

const LoginForm = ({ loginState }: LoginFormProps) => {
  const dispatch = useDispatch();

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
            <GoogleLogin
              clientId="444624699992-6j9qum8qhkajkclj2tc3nnifs0o88gqh.apps.googleusercontent.com"
              render={(renderProps) => (
                <button onClick={renderProps.onClick}>
                  Log in with Google
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
            <a href="www.google.com">Log in with Github</a>
          </div>
        </div>
        <div className="w-full flex flex-row justify-between items-center mt-10 mb-8 ">
          <div className="w-5/12 h-px bg-gray-400 inline-block"></div>
          <span className="pb-1 text-gray-400">Or</span>
          <div className="w-5/12 h-px bg-gray-400 inline-block"></div>
        </div>
      </div>
      {loginState.status === "ok" || (
        <div className="h-11 bg-red-50 rounded flex items-center mb-4">
          <p className="text-red-600  pl-3">{loginState.message}</p>
        </div>
      )}
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={CredentialsScheema}
        onSubmit={(credentials) => {
          dispatch(loginUserThunk(credentials));
        }}
      >
        {({ errors, touched }) => (
          <Form className="h-fit">
            <label className="" htmlFor="username">
              Username
            </label>
            {!(errors.username && touched.username) || (
              <div className="h-11 bg-red-50 rounded flex items-center mb-4">
                <p className="text-red-600 text-sm pl-3">{errors.username}</p>
              </div>
            )}
            <Field
              className="border border-black pl-3 rounded-md block w-full h-9 mt-3"
              type="text"
              id="username"
              name="username"
            />
            <div className="flex justify-between mt-4 ">
              <label htmlFor="password">Password</label>
              <span className="text-blueSpace">Forgot password?</span>
            </div>
            {!(errors.password && touched.password) || (
              <div className="h-11 bg-red-50 rounded flex items-center mb-4">
                <p className="text-red-600 text-sm pl-3">{errors.password}</p>
              </div>
            )}
            <Field
              className="border border-black rounded-md block pl-3 w-full h-9 mt-3"
              type="password"
              id="password"
              name="password"
            />
            <button
              className="bg-blueSpace rounded-md text-white w-full h-10 mt-8 flex justify-center items-center"
              type="submit"
            >
              Login
            </button>
            <p className="mt-2 ">
              Dont have an account?{" "}
              <Link
                to="/sign-in"
                onClick={() => {
                  dispatch(
                    setSuccesStateOnAppActionCreator(succesAppStateObject)
                  );
                }}
                className="text-blueSpace"
              >
                Sign up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
