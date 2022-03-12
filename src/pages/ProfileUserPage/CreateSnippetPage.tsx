import GenericCardCreate from "../../components/GenericCard/GenericCardCreate";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const CreateSnippetPage = () => {
  return (
    <>
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center bg-orangeSpace">
        <GenericCardCreate />
      </div>
    </>
  );
};

export default CreateSnippetPage;
