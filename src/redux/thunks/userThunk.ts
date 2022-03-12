import axios from "axios";
import { Action, Dispatch } from "redux";
import {
  loadUserSnippetCollectionAction,
  updateStateUserAction,
} from "../actions/actionCreators/actionCreatorUser";
import snippetInterface from "../interfaces/snippetInterface";
export interface deleteObjectInterface {
  id: string;
  language: string;
}
export interface editObjectInterface {
  snippetId: string;
  updatedProperty: snippetInterface;
}
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
  (deleteObject: deleteObjectInterface) =>
  async (dispatch: Dispatch<Action>) => {
    let response;
    try {
      const baseEndpoint = deleteObject.language.toLowerCase();
      response = await axios.delete(`${apiUrl}${baseEndpoint}/delete`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { snippetId: deleteObject.id },
      });

      dispatch(updateStateUserAction(response.data));
    } catch (error) {
      // here i should dispatch another error
    }
  };

export const createSnippetGlobalAndToUserCollectionThunk =
  (snippet: snippetInterface) => async (dispatch: Dispatch<Action>) => {
    let response;
    try {
      const baseEndpoint = snippet.language.toLowerCase();
      response = await axios.post(`${apiUrl}${baseEndpoint}/create`, snippet, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      dispatch(updateStateUserAction(response.data));
    } catch (error) {
      // more errorss to dispatch
    }
  };

export const editSnippetGloballyThunk =
  (editObject: editObjectInterface) => async () => {
    try {
      const baseEndpoint = editObject.updatedProperty.language.toLowerCase();
      await axios.patch(`${apiUrl}${baseEndpoint}/edit`, editObject, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
    } catch (error) {
      // more and more errors
    }
  };
