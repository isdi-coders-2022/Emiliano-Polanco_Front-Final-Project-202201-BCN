import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { updateStateUserAction } from "../../redux/actions/actionCreators/actionCreatorUser";
import store from "../../redux/store/store";
import guestUser from "../../redux/thunks/utils/guesUser";
import GenericCardEdit from "./GenericCardEdit";

const mockNavigate = jest.fn();
const mockDispatch = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Given a GenericCardEdit component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <GenericCardEdit />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByText("Title");

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it's rendered and a user clicks the Delete button", () => {
    test("Then it should wait and do an action", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <GenericCardEdit />
          </BrowserRouter>
        </Provider>
      );

      jest.useFakeTimers();
      jest.spyOn(global, "setTimeout");

      const submitButton = screen.getByRole("button", { name: "Delete" });

      userEvent.click(submitButton);

      expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
    });
  });

  describe("When it's rendered and a user clicks the Done button", () => {
    test("Then it Formik should handle the rest", () => {
      jest.mock("react-redux", () => ({
        ...jest.requireActual,
        useDispatch: () => mockDispatch,
      }));

      render(
        <Provider store={store}>
          <BrowserRouter>
            <GenericCardEdit />
          </BrowserRouter>
        </Provider>
      );

      const submitButton = screen.getByRole("button", { name: "Done" });

      userEvent.click(submitButton);
    });
  });
});
