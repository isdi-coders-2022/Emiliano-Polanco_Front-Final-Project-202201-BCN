import { UpdateCurrentGameActionInterface } from "../actions/actionCreators/actionCreatorGame";
import actionTypesSnippets from "../actions/actionTypes/actionTypesSnippets";
import { GameStateInterface } from "../interfaces/GameInterface";
import snippetInterface from "../interfaces/snippetInterface";
import gameReducer from "./gameReducer";

const currentState: GameStateInterface = {
  snippet: {
    language: "JavaScript",
    textCode: "Please let me leave this place",
    title: " I cannot code more",
  },
};

describe("Given a gameReducer", () => {
  describe("When it receives an updateGameState", () => {
    test("Tehn it should return the updatedGameState", () => {
      const normalSnippet: snippetInterface = {
        language: "JavaScript",
        textCode: "I am some textCode let see how this goes",
        title: "Generic title 1234",
      };
      const expectedGameState: GameStateInterface = {
        snippet: { ...normalSnippet },
      };

      const action: UpdateCurrentGameActionInterface = {
        type: actionTypesSnippets.loadGameSnippet,
        gameSnippet: { ...normalSnippet },
      };

      const receivedState = gameReducer(currentState, action);

      expect(receivedState).toEqual(expectedGameState);
    });
  });
});
