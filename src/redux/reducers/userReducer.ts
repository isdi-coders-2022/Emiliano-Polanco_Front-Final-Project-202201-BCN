import actionTypesUser from "../actions/actionTypes/actionTypesUser";
import userInterface from "../interfaces/userInterface";
import { AnyAction } from "redux";
import snippetInterface from "../interfaces/snippetInterface";
const guestUser: userInterface = {
  name: "New exited User",
  lastname: "Happy",
  username: "",
  email: "",
  password: "",
  pet: "",
  membership: "",
  scoreHistoryWpm: [],
  snippetsJavaScript: [],
  snippetsPhyton: [],
  snippetsCsharp: [],
  scoreHistoryAccuracy: [],
  scoreHistoryPerCharacter: [], //ojuuu ehhh que eesto esta mal y hay que revisarlo
  snippetsTypeScript: [],
  snippetsCollection: [],
};

const userReducer = (
  currentUser: userInterface = guestUser,
  action: AnyAction = { type: "none" }
): userInterface => {
  let newUserState: userInterface = currentUser;
  switch (action.type) {
    case actionTypesUser.loadUsersnippets:
      const jsSnippets: snippetInterface[] =
        action.userSnippetCollectionPayload.filter(
          (snippet: snippetInterface): boolean =>
            snippet.language === "JavaScript"
        );
      const tsSnippets: snippetInterface[] =
        action.userSnippetCollectionPayload.filter(
          (snippet: snippetInterface): boolean =>
            snippet.language === "TypeScript"
        );
      newUserState = {
        ...currentUser,
        snippetsJavaScript: jsSnippets,
        snippetsTypeScript: tsSnippets,
        snippetsCollection: action.userSnippetCollectionPayload,
      };
      break;
    default:
      newUserState = { ...currentUser };
      break;
  }
  return newUserState;
};

export default userReducer;
