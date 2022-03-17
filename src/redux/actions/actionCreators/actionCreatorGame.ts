import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesSnippets from "../actionTypes/actionTypesSnippets";

export const updateCurrentGameActionCreator = (
  gameSnippet: snippetInterface
) => ({
  type: actionTypesSnippets.loadGameSnippet,
  gameSnippet,
});
