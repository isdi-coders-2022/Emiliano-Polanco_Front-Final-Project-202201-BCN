import GenericCardEdit from "../../components/GenericCard/GenericCardEdit";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const EditSnippetPage = () => {
  return (
    <>
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center bg-orangeSpace">
        <GenericCardEdit />
      </div>
    </>
  );
};

export default EditSnippetPage;
