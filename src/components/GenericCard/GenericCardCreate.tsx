import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createSnippetGlobalAndToUserCollectionThunk } from "../../redux/thunks/userThunk";
import * as Yup from "yup";

const snippetScheema = Yup.object().shape({
  language: Yup.string().required("What language are we working with?"),
  textCode: Yup.string().required("I think we need code"),
  title: Yup.string().required("A title please"),
});

const GenericCardCreate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="bg-white w-2/3 h-2/3 rounded-2xl shadow-md p-10 flex flex-col">
      <h2 className="text-2xl font-medium">Create a snippet</h2>
      <Formik
        validateOnChange={false}
        validateOnBlur={true}
        initialValues={{
          title: "",
          textCode: "",
          language: "",
        }}
        validationSchema={snippetScheema}
        onSubmit={(snippet) => {
          dispatch(createSnippetGlobalAndToUserCollectionThunk(snippet));
          setTimeout(() => {
            navigate("/china");
          }, 600);
        }}
      >
        {({ errors, touched }) => (
          <Form className="h-full pt-8">
            <div className="bg-red-50 w-40 pl-3 rounded">
              <span className="text-red-500">
                {!(errors.title && touched.title) || errors.title}
              </span>
            </div>
            <div className="flex flex-row justify-between h-1/6 items-center text-xl">
              <div className="flex flex-row w-full">
                <label htmlFor="title">Title</label>

                <Field
                  className="focus:outline-none pl-3 w-full"
                  id="title"
                  name="title"
                  placeholder="Reducer assembly"
                />
              </div>
              <div className="bg-red-50 w-52 pl-3 rounded">
                <p className="text-red-500 text-base">
                  {" "}
                  {!(errors.language && touched.language) || errors.language}
                </p>
              </div>
              <label htmlFor="language-select"></label>
              <Field
                as="select"
                className="focus:outline-none"
                name="language"
                id="language-select"
              >
                <option value="">Language</option>
                <option className="focus:outline-none" value="JavaScript">
                  JavaScript
                </option>
                <option value="TypeScript">TypeScript</option>
              </Field>
            </div>
            <div className="bg-gray-400 w-40 h-0.5 rounded-sm"></div>
            <div className="h-4/6">
              <div className="bg-red-50 w-48 pl-3 rounded">
                <p className="text-red-500">
                  {!(errors.textCode && touched.textCode) || errors.textCode}
                </p>
              </div>
              <label htmlFor="textCode"></label>
              <Field
                as="textarea"
                className="focus:outline-none pt-3 w-full h-full"
                placeholder="Here goes your code"
                id="textCode"
                name="textCode"
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
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default GenericCardCreate;
