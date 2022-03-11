interface typesObject {
  loadUsersnippets: string;
  updateUserState: string;
}
const actionTypesUser: typesObject = {
  loadUsersnippets: "load the collecttion of snippets of the user",
  updateUserState: " refresh the user state with the data from the database",
};

export default actionTypesUser;
