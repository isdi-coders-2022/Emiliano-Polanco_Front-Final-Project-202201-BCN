import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import GamePage from "./GamePage";

describe("Given a HomePage component", () => {
  describe("When it get's rendered", () => {
    test("Then it should display a title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <GamePage></GamePage>
          </BrowserRouter>
        </Provider>
      );
      const text = screen.getByRole("link", { name: "Login" });

      expect(text).toBeInTheDocument();
    });
  });
});
