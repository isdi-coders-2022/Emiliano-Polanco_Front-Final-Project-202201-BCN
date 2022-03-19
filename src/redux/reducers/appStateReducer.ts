import { updateStateActionInterface } from "../actions/actionCreators/actionCreatorAppState";
import errorsActionTypes from "../actions/actionTypes/errorsActionTypes";
import { AppStateInterface } from "../interfaces/appStateInterface";

const appStateReducer = (
  currentAppState: AppStateInterface,
  action: updateStateActionInterface
) => {
  let newAppState: AppStateInterface;

  if (
    action.type === errorsActionTypes.setAppError ||
    action.type === errorsActionTypes.setAppSucces
  ) {
    newAppState = { ...action.appStatePayload };
  } else {
    newAppState = { message: "Oh no this is an unknow error", status: "error" };
  }

  return newAppState;
};

export default appStateReducer;
