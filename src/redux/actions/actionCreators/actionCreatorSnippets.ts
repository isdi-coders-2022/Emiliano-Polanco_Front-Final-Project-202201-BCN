import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesSnippets from "../actionTypes/actionTypesSnippets";

export interface addSnippetToGlobalCollection {
  type: string;
  snippetPayload: snippetInterface;
}

export const createSnippetToGlobalCollectionAction = (
  snippetPayload: snippetInterface
): addSnippetToGlobalCollection => ({
  type: actionTypesSnippets.createSnippet,
  snippetPayload,
});
