import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesUser from "../actionTypes/actionTypesUser";
export interface loadUserSnippetAction {
  type: string;
  userSnippetCollectionPayload: snippetInterface[];
}

export const loadUserSnippetCollectionAction = (
  userSnippetCollectionPayload: snippetInterface[]
): loadUserSnippetAction => ({
  type: actionTypesUser.loadUsersnippets,
  userSnippetCollectionPayload,
});
