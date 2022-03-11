import axios from "axios";
import { Action, Dispatch } from "redux";
import {
  loadUserSnippetCollectionAction,
  updateStateUserAction,
} from "../actions/actionCreators/actionCreatorUser";
import snippetInterface from "../interfaces/snippetInterface";
const apiUrl: string | undefined = process.env.REACT_APP_API_URL;

export const loadUserSnippetCollectionThunk = async (
  dispatch: Dispatch<Action>
) => {
  let response;
  try {
    response = await axios.get(`${apiUrl}user/snippets`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    const userSnippetCollection: snippetInterface[] = response.data;

    dispatch(loadUserSnippetCollectionAction(userSnippetCollection));
  } catch (error) {
    // here i shoould dispatch an error
  }
};

export const deleteSnippetFromUserCollectionThunk =
  (snippetId: string) => async (dispatch: Dispatch<Action>) => {
    let response;
    try {
      response = await axios.delete(`${apiUrl}javascript/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { snippetId },
      });

      dispatch(updateStateUserAction(response.data));
    } catch (error) {
      // here i should dispatch another error
    }
  };
