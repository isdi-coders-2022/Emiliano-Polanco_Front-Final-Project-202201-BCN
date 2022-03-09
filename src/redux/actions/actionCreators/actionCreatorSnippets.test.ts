import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesSnippets from "../actionTypes/actionTypesSnippets";
import {
  addSnippetToGlobalCollection,
  createSnippetToGlobalCollectionAction,
} from "./actionCreatorSnippets";

describe("Given a createSnippetToGlobalCollection action", () => {
  describe("When it receives a snippetPayload", () => {
    test("Then it should return an action with the snippetPayload", () => {
      const snippetPayload: snippetInterface = {
        language: "JavaScript",
        textCode: "console.log('hi')",
        title: "A console that says hi",
      };
      const expectedActionWithSnippetPayload: addSnippetToGlobalCollection = {
        type: actionTypesSnippets.createSnippet,
        snippetPayload,
      };

      const receivedAction: addSnippetToGlobalCollection =
        createSnippetToGlobalCollectionAction(snippetPayload);

      expect(receivedAction).toEqual(expectedActionWithSnippetPayload);
    });
  });
});
