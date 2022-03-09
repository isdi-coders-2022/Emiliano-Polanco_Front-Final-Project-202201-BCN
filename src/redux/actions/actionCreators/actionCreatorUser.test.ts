import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesUser from "../actionTypes/actionTypesUser";
import {
  loadUserSnippetAction,
  loadUserSnippetCollectionAction,
} from "./actionCreatorUser";

describe("Given a loadUserSnippetCollectionAction", () => {
  describe("When it receives a userIdPayload", () => {
    test("Then it should return an action with the right form", () => {
      const userSnippetCollectionPayload: snippetInterface[] = [
        {
          title: "i am super interesting",
          textCode: "consoleg trikitraka",
          language: "JavaScript",
        },
        {
          title: "iam almost done",
          textCode: "i am not coding i am suffering",
          language: "TypeScript",
        },
        {
          title: "Now i am beter",
          textCode: "wabalabadubdub",
          language: "TypeScript",
        },
      ];
      const actionRightForm: loadUserSnippetAction = {
        type: actionTypesUser.loadUsersnippets,
        userSnippetCollectionPayload,
      };

      const createdAction: loadUserSnippetAction =
        loadUserSnippetCollectionAction(userSnippetCollectionPayload);

      expect(createdAction).toEqual(actionRightForm);
    });
  });
});
