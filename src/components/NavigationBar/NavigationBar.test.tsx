import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import store from "../../redux/store/store";
import * as reactRedux from "react-redux";
import guestUser from "../../redux/thunks/utils/guesUser";
import userEvent from "@testing-library/user-event";

const useSelectorMock = jest.spyOn(reactRedux, "useSelector");

beforeEach(() => {
  useSelectorMock.mockClear();
});

describe("Given a NavegationBar component", () => {
  describe("When it's rendered", () => {
    test("Then it should display the a login text", () => {
      useSelectorMock.mockReturnValue({
        ...guestUser,
        name: "New exited User",
      });

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

  describe("When it's rendered and the user it's logged in", () => {
    test("Then it should display his name", () => {
      useSelectorMock.mockReturnValue({
        ...guestUser,
        name: "emiliano",
      });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavigationBar />
          </BrowserRouter>
        </Provider>
      );

      const userName = screen.getByRole("button", { name: "emiliano" });

      expect(userName).toBeInTheDocument();
    });
  });

  describe("When it's rendered and the user it's logged", () => {
    test("The logut should appear in the page", () => {
      useSelectorMock.mockReturnValue({
        ...guestUser,
        name: "giorno",
      });

      render(
        <Provider store={store}>
          <BrowserRouter>
            <NavigationBar />
          </BrowserRouter>
        </Provider>
      );
      const logoutButton = screen.getByRole("link", {
        name: "Log out",
      });

      userEvent.click(logoutButton);

      expect(logoutButton).toBeInTheDocument();
    });
  });
});
