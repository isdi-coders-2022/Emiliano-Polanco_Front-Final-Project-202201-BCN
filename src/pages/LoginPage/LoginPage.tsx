import LoginForm from "../../components/GenericCard/Forms/LoginForm/LoginForm";
import GenericCardCreate from "../../components/GenericCard/GenericCardCreate";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const LoginPage = () => {
  return (
    <>
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center bg-orangeSpace">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
