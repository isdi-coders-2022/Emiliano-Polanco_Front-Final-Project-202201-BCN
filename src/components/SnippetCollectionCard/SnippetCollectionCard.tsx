interface SnippetCollectionProps {
  title: string;
  language: string;
  editMode: boolean;
}

interface DesignValuesInterface {
  colors: string[];
  acronym: string;
}
const getCardDesignValues = (
  programingLanguage: string
): DesignValuesInterface => {
  let colorsAndAcronym: DesignValuesInterface;
  switch (programingLanguage) {
    case "JavaScript":
      colorsAndAcronym = { colors: ["yellowSpace", "black"], acronym: "JS" };
      break;
    case "TypeScript":
      colorsAndAcronym = { colors: ["blueSpace", "white"], acronym: "TS" };
      break;
    default:
      colorsAndAcronym = { colors: ["black", "white"], acronym: "unknow" };
      break;
  }
  return colorsAndAcronym;
};
const SnippetCollectionCard: React.FC<SnippetCollectionProps> = ({
  title,
  language,
  editMode,
}: SnippetCollectionProps): JSX.Element => {
  const { colors, acronym }: DesignValuesInterface =
    getCardDesignValues(language);
  const bounce = `animate-${editMode ? "bounce" : "none"}`;
  return (
    <li
      className={`bg-${colors[0]} flex flex-row justify-between h-16 rounded-xl pl-6 pr-6 items-center mt-6 ${bounce}`}
    >
      <h3 className={`text-${colors[1]}`}>{title}</h3>
      <span className={`text-${colors[1]}`}>{acronym}</span>
    </li>
  );
};

export default SnippetCollectionCard;
