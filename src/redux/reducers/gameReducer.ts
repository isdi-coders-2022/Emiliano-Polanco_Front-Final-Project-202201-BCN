import { AnyAction } from "redux";
import actionTypesSnippets from "../actions/actionTypes/actionTypesSnippets";
import { GameStateInterface } from "../interfaces/GameInterface";

const placeHolderGame: GameStateInterface = {
  snippet: {
    language: "TypeScript",
    textCode: "This is the default state",
    title: "Default title",
  },
};

const gameReducer = (
  currentGameState: GameStateInterface = placeHolderGame,
  action: AnyAction = {} as AnyAction
) => {
  let newGameState;
  switch (action.type) {
    case actionTypesSnippets.loadGameSnippet:
      newGameState = { snippet: action.gameSnippet };
      break;
    default:
      newGameState = { ...currentGameState };
      break;
  }

  return newGameState;
};

export default gameReducer;
