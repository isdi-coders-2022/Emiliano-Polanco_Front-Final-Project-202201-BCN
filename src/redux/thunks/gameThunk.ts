import axios from "axios";
import { Dispatch } from "react";
import { Action } from "redux";
import { updateCurrentGameActionCreator } from "../actions/actionCreators/actionCreatorGame";

export interface GetSnippet {
  id: string;
  language: string;
}
const apiUrl = process.env.REACT_APP_API_URL;
export const getSnippetGame =
  (getSnippetObject: GetSnippet) => async (dispatch: Dispatch<Action>) => {
    try {
      const response = await axios.get(
        `${apiUrl}${getSnippetObject.language}/snippet?id=${getSnippetObject.id}`
      );
      const snippet = response.data;
      dispatch(updateCurrentGameActionCreator(snippet));
    } catch (error) {
      //dispatch error
    }
  };
