import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../../redux/store/store";
import succesAppStateObject from "../../../redux/utils/succesAppStateObject";
import RegisterForm from "../RegisterForm/RegisterForm";

describe("Given a RegisterForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a title and a button", async () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <RegisterForm registerState={succesAppStateObject} />
          </BrowserRouter>
        </Provider>
      );

      const title = screen.getByRole("heading", { name: "Sign up" });
      const button = screen.getByRole("button", { name: "Sign up" });

      expect(title).toBeInTheDocument();
      expect(button).toBeInTheDocument();
    });
  });
});
