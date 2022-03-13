import axios from "axios";
import jwtDecode from "jwt-decode";
import { Dispatch } from "react";
import { Action } from "redux";
import { updateStateUserAction } from "../actions/actionCreators/actionCreatorUser";
import { credentialsUserInterface } from "./interfaces/credentialsUserInterface";
import { tokenPayloadInterface } from "./interfaces/tokenPayloadInterface";
import guestUser from "./utils/guesUser";

const apiUrl: string | undefined = process.env.REACT_APP_API_URL as string;

export const loginUserThunk =
  ({ username, password }: credentialsUserInterface) =>
  async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.post(apiUrl, {
        username,
        password,
      });
      const tokenString = response.data.token;
      const { name }: tokenPayloadInterface = await jwtDecode(tokenString);
      const updatedUser = { ...guestUser, name };
      localStorage.setItem("token", tokenString);
      dispatch(updateStateUserAction(updatedUser));
    } catch (error) {
      // i dispatch error here
    }
  };
