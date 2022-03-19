import { combineReducers } from "redux";
import store from "../store/store";
import appStateReducer from "./appStateReducer";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
  app: appStateReducer,
});

export type RootState = ReturnType<typeof store.getState>;
