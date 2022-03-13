import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import LoginForm from "./LoginForm";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title and a button", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <LoginForm />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading", { name: "Log in" });
      const button = screen.getByRole("button", { name: "Login" });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
