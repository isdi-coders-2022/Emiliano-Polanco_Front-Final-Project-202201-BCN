import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";

describe("Given a NavegationBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the a login text", () => {
      render(
        <BrowserRouter>
          <NavigationBar />
        </BrowserRouter>
      );
      const navigationHome: object = screen.getByRole("link", {
        name: "Login",
      });

      expect(navigationHome).toBeInTheDocument();
    });
  });
});
