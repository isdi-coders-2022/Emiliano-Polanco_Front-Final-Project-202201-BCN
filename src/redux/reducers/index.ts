import { combineReducers } from "redux";
import store from "../store/store";
import gameReducer from "./gameReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
  game: gameReducer,
});

export type RootState = ReturnType<typeof store.getState>;
