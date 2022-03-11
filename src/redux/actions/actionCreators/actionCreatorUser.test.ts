import snippetInterface from "../../interfaces/snippetInterface";
import userInterface from "../../interfaces/userInterface";
import actionTypesUser from "../actionTypes/actionTypesUser";
import {
  loadUserSnippetAction,
  loadUserSnippetCollectionAction,
  updateStateUserAction,
  updateUserStateInterface,
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

describe("Given a updateUserStateAction", () => {
  describe("When it receives the user state payload", () => {
    test("Then it should return an action with the gived payload", () => {
      const userStatePayload: userInterface = {
        name: "Giorno",
        lastname: "Giovanna",
        username: "goldenWind",
        email: "goldoj@gmail.com",
        password: "pass123",
        pet: "basic",
        membership: "basic",
        scoreHistoryWpm: [],
        snippetsJavaScript: [],
        snippetsPhyton: [],
        snippetsCsharp: [],
        scoreHistoryAccuracy: [],
        scoreHistoryPerCharacter: [],
        snippetsTypeScript: [],
        snippetsCollection: [],
      };

      const expectedAction: updateUserStateInterface = {
        type: actionTypesUser.updateUserState,
        userStatePayload,
      };

      const receivedAction = updateStateUserAction(userStatePayload);

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
