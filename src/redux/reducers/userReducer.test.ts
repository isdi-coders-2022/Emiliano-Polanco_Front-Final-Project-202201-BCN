import { AnyAction } from "redux";
import { updateUserStateInterface } from "../actions/actionCreators/actionCreatorUser";
import actionTypesUser from "../actions/actionTypes/actionTypesUser";
import snippetInterface from "../interfaces/snippetInterface";
import userInterface from "../interfaces/userInterface";
import userReducer from "./userReducer";

const currentUserState: userInterface = {
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

describe("Given a userReducer", () => {
  describe("When it receives a loadUserSnippetCollectionAction", () => {
    test("Then it should return the user state with his collection of snippets", () => {
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
      const expectedUserState: userInterface = {
        name: "Giorno",
        lastname: "Giovanna",
        username: "goldenWind",
        email: "goldoj@gmail.com",
        password: "pass123",
        pet: "basic",
        membership: "basic",
        scoreHistoryWpm: [],
        snippetsJavaScript: [
          {
            title: "i am super interesting",
            textCode: "consoleg trikitraka",
            language: "JavaScript",
          },
        ],
        snippetsPhyton: [],
        snippetsCsharp: [],
        scoreHistoryAccuracy: [],
        scoreHistoryPerCharacter: [],
        snippetsTypeScript: [
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
        ],
        snippetsCollection: [
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
        ],
      };

      const action = {
        type: actionTypesUser.loadUsersnippets,
        userSnippetCollectionPayload,
      };

      const receivedUserState = userReducer(currentUserState, action);

      expect(receivedUserState).toEqual(expectedUserState);
    });
  });

  describe("When it receives an action with no matching case", () => {
    test("Then it should return the currentUserState", () => {
      const expectedUserState: userInterface = {
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

      const action: AnyAction = {
        type: "let wee how the default case works",
      };

      const receivedUserState = userReducer(currentUserState, action);

      expect(receivedUserState).toEqual(expectedUserState);
    });
  });

  describe("When it receives an updateUserStateAction", () => {
    test("Then it should return the new userState", () => {
      const expectedUserState: userInterface = {
        name: "I am the new state of the user",
        lastname: "stadios stadius",
        username: "Giovanna",
        email: "normalmail@gmail.com",
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

      const userStatePayload = { ...expectedUserState };

      const action: updateUserStateInterface = {
        type: actionTypesUser.updateUserState,
        userStatePayload,
      };

      const receivedState = userReducer(currentUserState, action);

      expect(receivedState).toEqual(expectedUserState);
    });
  });

  describe("When it receives no action", () => {
    test("Then it should return the currentUserState", () => {
      const expectedUserState: userInterface = {
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

      const receivedUserState = userReducer();

      expect(receivedUserState).toEqual(expectedUserState);
    });
  });
});
