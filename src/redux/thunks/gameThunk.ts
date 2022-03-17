import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
const apiUrl = process.env.REACT_APP_API_URL;
export const getSnippetGame =
  (idSnippet: string) => async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.get(`${apiUrl}snippet?id=${idSnippet}`);
      const snippet = response.data;
      dispatch(updateCurrentGame(snippet));
    } catch (error) {
      //dispatch error
    }
  };
