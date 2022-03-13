import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import store from "../../redux/store/store";

describe("Given a NavegationBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the a login text", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavigationBar />
          </BrowserRouter>
        </Provider>
      );
      const navigationHome: object = screen.getByRole("link", {
        name: "Login",
      });
      const aboutElement: object = screen.getByRole("link", {
        name: "About",
      });

      expect(aboutElement).toBeInTheDocument();

      expect(navigationHome).toBeInTheDocument();
    });
  });
});
