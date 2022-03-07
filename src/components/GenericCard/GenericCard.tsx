import SnippetCollectionCard from "../SnippetCollectionCard/SnippetCollectionCard";

const GenericCard: React.FC = () => {
  return (
    <div className="bg-purpleSpace h-72 rounded-3xl">
      <h2 className="text-xl m-6">My snippet collections</h2>
      <ul>
        <SnippetCollectionCard />
      </ul>
    </div>
  );
};

export default GenericCard;
