import snippetInterface from "../../interfaces/snippetInterface";
import userInterface from "../../interfaces/userInterface";
import actionTypesUser from "../actionTypes/actionTypesUser";
export interface loadUserSnippetAction {
  type: string;
  userSnippetCollectionPayload: snippetInterface[];
}
export interface updateUserStateInterface {
  type: string;
  userStatePayload: userInterface;
}

export const loadUserSnippetCollectionAction = (
  userSnippetCollectionPayload: snippetInterface[]
): loadUserSnippetAction => ({
  type: actionTypesUser.loadUsersnippets,
  userSnippetCollectionPayload,
});

export const updateStateUserAction = (
  userStatePayload: userInterface
): updateUserStateInterface => ({
  type: actionTypesUser.updateUserState,
  userStatePayload,
});
