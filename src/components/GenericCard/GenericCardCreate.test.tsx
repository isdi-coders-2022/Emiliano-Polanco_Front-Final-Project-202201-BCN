import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import GenericCardCreate from "./GenericCardCreate";

describe("Given a GenericCardCreate component", () => {
  describe("When it's rendered", () => {
    test("Then it should render a title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <GenericCardCreate />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByText("Title");

      expect(title).toBeInTheDocument();
    });
  });
});
