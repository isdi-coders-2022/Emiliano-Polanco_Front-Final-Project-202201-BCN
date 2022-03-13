import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import LoginPage from "./LoginPage";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Title Log in", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading", { name: "Log in" });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show a Button Login", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const button = screen.getByRole("button", { name: "Login" });

      expect(button).toBeInTheDocument();
    });
    test("Then it should show a textbox Username", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginPage />
          </BrowserRouter>
        </Provider>
      );

      const textBox = screen.getByRole("textbox", { name: "Username" });

      expect(textBox).toBeInTheDocument();
    });
  });
});
