import { AppStateInterface } from "../../interfaces/appStateInterface";
import errorsActionTypes from "../actionTypes/errorsActionTypes";

export interface updateStateActionInterface {
  type: string;
  appStatePayload: AppStateInterface;
}

export const setErrorOnAppActionCreator = (
  appStatePayload: AppStateInterface
): updateStateActionInterface => ({
  type: errorsActionTypes.setAppError,
  appStatePayload,
});

export const setSuccesStateOnAppActionCreator = (
  appStatePayload: AppStateInterface
): updateStateActionInterface => ({
  type: errorsActionTypes.setAppSucces,
  appStatePayload,
});
