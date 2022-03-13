import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a Title Sign Up", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading", { name: "Sign up" });

      expect(title).toBeInTheDocument();
    });
    test("Then it should show a Button Sign up", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading", { name: "Sign up" });
      const button = screen.getByRole("button", { name: "Sign up" });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
      const textBox = screen.getByRole("textbox", { name: "Email" });
      expect(textBox).toBeInTheDocument();
    });
    test("Then it should show a  textBox Email", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterPage />
          </BrowserRouter>
        </Provider>
      );

      const textBox = screen.getByRole("textbox", { name: "Email" });
      expect(textBox).toBeInTheDocument();
    });
  });
});
