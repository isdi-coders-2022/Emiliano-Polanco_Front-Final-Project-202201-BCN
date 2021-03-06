import mockAxios from "jest-mock-axios";
import {
  loadUserSnippetAction,
  updateUserStateInterface,
} from "../actions/actionCreators/actionCreatorUser";
import actionTypesUser from "../actions/actionTypes/actionTypesUser";
import snippetInterface from "../interfaces/snippetInterface";
import userInterface from "../interfaces/userInterface";
import {
  createSnippetGlobalAndToUserCollectionThunk,
  deleteObjectInterface,
  deleteSnippetFromUserCollectionThunk,
  editObjectInterface,
  editSnippetGloballyThunk,
  loadUserSnippetCollectionThunk,
} from "./userThunk";
import guestUser from "./utils/guesUser";

afterEach(() => {
  mockAxios.reset();
});

describe("Given a loadUseSnippetCollectionThunk", () => {
  describe("When it's called and has a valid token in the storage", () => {
    test("Then it should call the dispatch method passing in the right action", async () => {
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
      const theRightAction: loadUserSnippetAction = {
        type: actionTypesUser.loadUsersnippets,
        userSnippetCollectionPayload,
      };
      const mockDispatch = jest.fn();
      const apiResponse = {
        // OJIUI EHH
        data: {
          ...guestUser,
          snippetsJavaScript: [
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
          ],
          snippetsTypeScript: [
            {
              title: "Now i am beter",
              textCode: "wabalabadubdub",
              language: "TypeScript",
            },
          ],
        },
      };

      mockAxios.get.mockResolvedValueOnce(apiResponse);

      await loadUserSnippetCollectionThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(theRightAction);
    });
  });
});

describe("Given a deleteSnippetUserCollectionThunk", () => {
  describe("When it's called passing in an object with and id", () => {
    test("Then it should call the dispatch method passing in an updateUserStateAction", async () => {
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

      const theRightAction: updateUserStateInterface = {
        type: actionTypesUser.updateUserState,
        userStatePayload,
      };

      const apiResponse = {
        data: { ...userStatePayload },
      };
      const mockDispatch = jest.fn();

      const deletedObject: deleteObjectInterface = {
        language: "JavaScript",
        id: "ldkjflsdk432f",
      };

      mockAxios.delete.mockResolvedValueOnce(apiResponse);
      const deleteThunk = deleteSnippetFromUserCollectionThunk(deletedObject);

      await deleteThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(theRightAction);
    });
  });
});

describe("Given a createSnippetGlobalAndToUserCollection", () => {
  describe("When it's called passing in an object snippet", () => {
    test("Then it should call the dispatch method passing in an updateUserStateAction", async () => {
      const createdSnippet: snippetInterface = {
        language: "JavaScript",
        textCode: "I am some complex code uwu",
        title: "super hard code",
      };

      const userStatePayload: userInterface = {
        name: "Giorno",
        lastname: "Giovanna",
        username: "goldenWind",
        email: "goldoj@gmail.com",
        password: "pass123",
        pet: "basic",
        membership: "basic",
        scoreHistoryWpm: [],
        snippetsJavaScript: [createdSnippet],
        snippetsPhyton: [],
        snippetsCsharp: [],
        scoreHistoryAccuracy: [],
        scoreHistoryPerCharacter: [],
        snippetsTypeScript: [],
        snippetsCollection: [],
      };

      const theRightAction: updateUserStateInterface = {
        type: actionTypesUser.updateUserState,
        userStatePayload,
      };

      const apiResponse = {
        data: { ...userStatePayload, snippetsJavaScript: [createdSnippet] },
      };
      const mockDispatch = jest.fn();

      mockAxios.post.mockResolvedValueOnce(apiResponse);
      const createThunk =
        createSnippetGlobalAndToUserCollectionThunk(createdSnippet);

      await createThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(theRightAction);
    });
  });
});

describe("Given a editSnippetGoballyThunk", () => {
  describe("When it's called passing in an editObject", () => {
    test("Then it should call the patch method of axios", async () => {
      const editObject: editObjectInterface = {
        snippetId: "lkjlsdfkj342",
        updatedProperty: {
          language: "JavaScript",
          textCode: "mazing code",
          title: "i am a title lil",
        },
      };
      mockAxios.patch.mockResolvedValueOnce("none");
      editSnippetGloballyThunk(editObject);
    });
  });
});
