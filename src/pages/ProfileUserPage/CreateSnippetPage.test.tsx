import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import CreateSnippetPage from "./CreateSnippetPage";

describe("Given a createSnippetPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should have a title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <CreateSnippetPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Title");

      expect(title).toBeInTheDocument();
    });
  });
});
