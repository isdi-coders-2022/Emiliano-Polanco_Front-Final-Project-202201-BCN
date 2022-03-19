import { AppStateInterface } from "../../interfaces/appStateInterface";
import errorsActionTypes from "../actionTypes/errorsActionTypes";
import {
  setErrorOnAppActionCreator,
  setSuccesStateOnAppActionCreator,
  updateStateActionInterface,
} from "./actionCreatorAppState";

describe("Given a setErrorOnAppStateActionCreator", () => {
  describe("When it intanciated with an app state payload", () => {
    test("Then it should return an object with the right form and payload", () => {
      const appStatePayload: AppStateInterface = {
        message: "an explosion in the server, 7 people died",
        status: "error",
      };
      const expectedAction: updateStateActionInterface = {
        type: errorsActionTypes.setAppError,
        appStatePayload,
      };

      const receivedAction: updateStateActionInterface =
        setErrorOnAppActionCreator({ ...appStatePayload });

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});

describe("Given a setSuccesAppStateActionCreator", () => {
  describe("When it intanciated with an app state payload", () => {
    test("Then it should return an object with the right form and payload", () => {
      const appStatePayload: AppStateInterface = {
        message: "everythin it's great , still 7 people died",
        status: "ok",
      };
      const expectedAction: updateStateActionInterface = {
        type: errorsActionTypes.setAppSucces,
        appStatePayload,
      };

      const receivedAction: updateStateActionInterface =
        setSuccesStateOnAppActionCreator({ ...appStatePayload });

      expect(receivedAction).toEqual(expectedAction);
    });
  });
});
