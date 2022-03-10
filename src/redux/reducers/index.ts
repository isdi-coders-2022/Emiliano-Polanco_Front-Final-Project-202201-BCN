import { combineReducers } from "redux";
import store from "../store/store";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof store.getState>;
