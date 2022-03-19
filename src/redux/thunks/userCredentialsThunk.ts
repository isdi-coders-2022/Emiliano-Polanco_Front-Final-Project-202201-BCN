import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "react";
import { Action } from "redux";
import {
  setErrorOnAppActionCreator,
  setSuccesStateOnAppActionCreator,
} from "../actions/actionCreators/actionCreatorAppState";
import { updateStateUserAction } from "../actions/actionCreators/actionCreatorUser";
import succesAppStateObject from "../utils/succesAppStateObject";
import { credentialsUserInterface } from "./interfaces/credentialsUserInterface";
import { tokenPayloadInterface } from "./interfaces/tokenPayloadInterface";
import { userRegisterDataInterface } from "./interfaces/userRegisterDataInterface";
import guestUser from "./utils/guesUser";

const apiUrl: string | undefined = process.env.REACT_APP_API_URL as string;

export const loginUserThunk =
  (credentials: credentialsUserInterface) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(`${apiUrl}users/login`, credentials);
      const tokenString: string = response.data.token;
      const { name }: tokenPayloadInterface = await jwtDecode(tokenString);
      const updatedUser = { ...guestUser, name };
      localStorage.setItem("token", tokenString);

      dispatch(updateStateUserAction(updatedUser));
      dispatch(setSuccesStateOnAppActionCreator(succesAppStateObject));
    } catch (error) {
      dispatch(
        setErrorOnAppActionCreator({
          message: "Username and/or Password is wrong",
          status: "error",
        })
      );
    }
  };

export const registerUserThunk =
  (registerData: userRegisterDataInterface) =>
  async (dispatch: Dispatch<Action>) => {
    let response;
    try {
      response = await axios.post(`${apiUrl}users/register`, registerData);
      const tokenString: string = response.data.token;
      const { name }: tokenPayloadInterface = await jwtDecode(tokenString);
      const updatedUser = { ...guestUser, name };
      localStorage.setItem("token", tokenString);
      dispatch(updateStateUserAction(updatedUser));
    } catch (error) {
      dispatch(
        setErrorOnAppActionCreator({
          message:
            "Please fill in all the fields and make sure the data it's correct",
          status: "error",
        })
      );
    }
  };
