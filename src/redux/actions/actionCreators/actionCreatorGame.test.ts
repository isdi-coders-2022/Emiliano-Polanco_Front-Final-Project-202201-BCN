import snippetInterface from "../../interfaces/snippetInterface";
import actionTypesSnippets from "../actionTypes/actionTypesSnippets";
import {
  updateCurrentGameActionCreator,
  UpdateCurrentGameActionInterface,
} from "./actionCreatorGame";

describe("Given an updateCurrentGameActionCreator", () => {
  describe("When its called with a payload as argument", () => {
    test("Then it should return an action with the right form", () => {
      const gameSnippet: snippetInterface = {
        language: "C sharp",
        textCode: " i really dont know how to code",
        title: "Amazing software snippet",
      };
      const actionWithTheRightForm: UpdateCurrentGameActionInterface = {
        type: actionTypesSnippets.loadGameSnippet,
        gameSnippet,
      };

      const receivedAction = updateCurrentGameActionCreator({ ...gameSnippet });

      expect(receivedAction).toEqual(actionWithTheRightForm);
    });
  });
});
