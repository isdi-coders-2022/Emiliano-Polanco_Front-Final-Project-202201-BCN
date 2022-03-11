import GenericCardEdit from "../../components/GenericCard/GenericCardEdit";

interface EditSnippetPagePropsInterface {
  snippetId: string;
}

const EditSnippetPage = ({ snippetId }: EditSnippetPagePropsInterface) => {
  return (
    <div className="w-full h-full flex justify-center align-center">
      <GenericCardEdit snippetId={snippetId} />
    </div>
  );
};

export default EditSnippetPage;
