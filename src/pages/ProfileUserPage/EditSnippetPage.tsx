import GenericCardEdit from "../../components/GenericCard/GenericCardEdit";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

interface EditSnippetPagePropsInterface {
  snippetId: string;
}

const EditSnippetPage = ({ snippetId }: EditSnippetPagePropsInterface) => {
  return (
    <>
      <NavigationBar />
      <div className=" h-screen flex justify-center items-center bg-orangeSpace">
        <GenericCardEdit snippetId={snippetId} />
      </div>
    </>
  );
};

export default EditSnippetPage;
