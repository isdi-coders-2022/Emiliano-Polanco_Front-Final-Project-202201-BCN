import mockAxios from "../../setupTests";
import { updateUserStateInterface } from "../actions/actionCreators/actionCreatorUser";
import actionTypesUser from "../actions/actionTypes/actionTypesUser";
import { credentialsUserInterface } from "./interfaces/credentialsUserInterface";
import { loginUserThunk } from "./userCredentialsThunk";
import guestUser from "./utils/guesUser";

describe("Given a loginUserThunk", () => {
  describe("When it receives the right credentials", () => {
    test("Then it should call the dispatch passing in the updateUserStateAction", async () => {
      const theRightCredentials: credentialsUserInterface = {
        username: "goldenWind1",
        password: "pass123",
      };

      const mockDispatch = jest.fn();
      const expectedAction: updateUserStateInterface = {
        type: actionTypesUser.updateUserState,
        userStatePayload: { ...guestUser, name: "GergeMapMaster" },
      };

      const apiResponse = {
        data: {
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiR2VyZ2VNYXBNYXN0ZXIiLCJ1c2VybmFtZSI6Imdlb3JnZSIsIl9pZCI6IjYyMjhhMjA1MmNjNzY2NjJiM2I4Yzk5MCIsImlhdCI6MTY0NjkyMzAxMX0.h4dTBmeQhv4KJ3TO0SAIGppu_J3ijO6fmnaIiLIkV7o",
        },
      };

      mockAxios.post.mockResolvedValueOnce(apiResponse);

      const loginThunk = loginUserThunk(theRightCredentials);

      await loginThunk(mockDispatch);

      expect(mockDispatch).toHaveBeenCalledWith(expectedAction);
    });
  });
});
