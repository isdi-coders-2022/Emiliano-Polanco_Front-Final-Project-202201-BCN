import mockAxios from "../../setupTests";
import { UpdateCurrentGameActionInterface } from "../actions/actionCreators/actionCreatorGame";
import actionTypesSnippets from "../actions/actionTypes/actionTypesSnippets";
import snippetInterface from "../interfaces/snippetInterface";
import { getSnippetGame } from "./gameThunk";

describe("Given a get snipped thunk", () => {
  describe("When it receives an getSnippet object", () => {
    test("Then it should call the dispatch method passing in loadSnippetAction", async () => {
      const gameSnippet: snippetInterface = {
        title: "normal title",
        textCode: "i am a chunk of code",
        language: "TypeScript",
      };
      const loadSnippetAction: UpdateCurrentGameActionInterface = {
        gameSnippet,
        type: actionTypesSnippets.loadGameSnippet,
      };
      const apiResponse = {
        data: { ...gameSnippet },
      };
      mockAxios.get.mockResolvedValueOnce(apiResponse);
      const mockDispatch = jest.fn();

      const thunk = getSnippetGame({ language: "Assembly", id: "43423234" });

      await thunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(loadSnippetAction);
    });
  });
});
