import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesSnippets from "../actionTypes/actionTypesSnippets";

export interface UpdateCurrentGameActionInterface {
  type: string;
  gameSnippet: snippetInterface;
}

export const updateCurrentGameActionCreator = (
  gameSnippet: snippetInterface
) => ({
  type: actionTypesSnippets.loadGameSnippet,
  gameSnippet,
});
