import GenericCardCreate from "../../components/GenericCard/GenericCardCreate";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const CreateSnippetPage = () => {
  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center ">
        <GenericCardCreate />
      </div>
    </>
  );
};

export default CreateSnippetPage;
