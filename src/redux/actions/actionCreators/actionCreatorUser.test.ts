import actionTypesUser from "../actionTypes/actionTypesUser";
import {
  loadUserSnippetAction,
  loadUserSnippetCollectionAction,
} from "./actionCreatorUser";

describe("Given a loadUserSnippetCollectionAction", () => {
  describe("When it receives a userIdPayload", () => {
    test("Then it should return an action with the right form", () => {
      const userIdPayload: string = "superId43";
      const actionRightForm: loadUserSnippetAction = {
        type: actionTypesUser.loadUsersnippets,
        userIdPayload,
      };

      const createdAction: loadUserSnippetAction =
        loadUserSnippetCollectionAction(userIdPayload);

      expect(createdAction).toEqual(actionRightForm);
    });
  });
});
