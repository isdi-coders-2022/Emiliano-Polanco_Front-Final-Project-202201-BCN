import GenericCardEdit from "../../components/GenericCard/GenericCardEdit";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const EditSnippetPage = () => {
  return (
    <>
      <img
        className="h-full  w-full fixed  -z-10 "
        src="backgroundStains.png"
        alt="background"
      />
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center">
        <GenericCardEdit />
      </div>
    </>
  );
};

export default EditSnippetPage;
