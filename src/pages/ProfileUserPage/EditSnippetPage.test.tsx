import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import EditSnippetPage from "./EditSnippetPage";
describe("Given a EditSnippetPage component", () => {
  describe("When it's rendered", () => {
    test("Then it should shown a title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <EditSnippetPage />
          </BrowserRouter>
        </Provider>
      );
      const title = screen.getByText("Title");

      expect(title).toBeInTheDocument();
    });
  });
});
