import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import GenericCardEdit from "./GenericCardEdit";

describe("Given a GenericCardEdit component", () => {
  describe("When it's rendered", () => {
    test("Then it should", () => {
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
});
