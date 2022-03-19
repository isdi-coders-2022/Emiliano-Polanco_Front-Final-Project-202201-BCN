import { updateStateActionInterface } from "../actions/actionCreators/actionCreatorAppState";
import errorsActionTypes from "../actions/actionTypes/errorsActionTypes";
import { AppStateInterface } from "../interfaces/AppErrorStateInterface";
import succesAppStateObject from "../utils/succesAppStateObject";

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
    newAppState = succesAppStateObject;
  }

  return newAppState;
};

export default appStateReducer;
