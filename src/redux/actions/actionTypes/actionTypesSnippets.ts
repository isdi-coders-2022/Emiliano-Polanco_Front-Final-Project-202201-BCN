interface typesSnippet {
  createSnippet: string;
  loadGameSnippet: string;
}
const actionTypesSnippets: typesSnippet = {
  createSnippet: "create a snippet for the global collection of snippets",
  loadGameSnippet: "Load an snippet to the game state",
};

export default actionTypesSnippets;
