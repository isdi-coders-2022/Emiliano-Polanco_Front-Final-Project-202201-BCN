import mockAxios from "jest-mock-axios";
import { loadUserSnippetAction } from "../actions/actionCreators/actionCreatorUser";
import actionTypesUser from "../actions/actionTypes/actionTypesUser";
import snippetInterface from "../interfaces/snippetInterface";
import { loadUserSnippetCollectionThunk } from "./userThunk";

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
        data: [...userSnippetCollectionPayload],
      };

      mockAxios.get.mockResolvedValueOnce(apiResponse);

      await loadUserSnippetCollectionThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(theRightAction);
    });
  });
});