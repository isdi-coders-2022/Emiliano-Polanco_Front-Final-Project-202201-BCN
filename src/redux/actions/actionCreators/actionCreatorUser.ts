import actionTypesUser from "../actionTypes/actionTypesUser";
export interface loadUserSnippetAction {
  type: string;
  userIdPayload: string;
}

export const loadUserSnippetCollectionAction = (
  userIdPayload: string
): loadUserSnippetAction => ({
  type: actionTypesUser.loadUsersnippets,
  userIdPayload,
});
