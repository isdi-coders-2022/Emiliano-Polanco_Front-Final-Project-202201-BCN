import LoginForm from "../../components/Forms/LoginForm/LoginForm";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const LoginPage = () => {
  return (
    <>
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center ">
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
