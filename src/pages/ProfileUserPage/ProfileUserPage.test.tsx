import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import ProfileUserPage from "./ProfileUserPage";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Title My snippet collections", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProfileUserPage />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading", {
        name: "My snippet collections",
      });
      expect(title).toBeInTheDocument();
    });

    test("Then it should show a Button All", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProfileUserPage />
          </BrowserRouter>
        </Provider>
      );

      const allButton = screen.getByRole("button", { name: "All" });
      expect(allButton).toBeInTheDocument();
    });

    test("Then it should show a Link of the OrangeThingy pet", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <ProfileUserPage />
          </BrowserRouter>
        </Provider>
      );

      const linkHome = screen.getByRole("link", {
        name: "orange thingy pet Codespace",
      });
      expect(linkHome).toBeInTheDocument();
    });
  });
});
