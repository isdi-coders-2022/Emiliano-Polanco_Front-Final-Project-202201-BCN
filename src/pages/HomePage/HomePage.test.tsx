import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import HomePage from "./HomePage";

import snippetInterface from "../../redux/interfaces/snippetInterface";

const mockRandomSnippet: snippetInterface = {
  language: "TypeScript",
  textCode: "I am some textCode",
  title: " super title",
};

jest.mock("./getRandomSnippet", () => {
  return {
    getRandomSnippet: () => mockRandomSnippet,
  };
});

describe("Given a HomePage component", () => {
  describe("When it get's rendered", () => {
    test("Then it should display a title", () => {
      render(
        <Provider store={store}>
          <BrowserRouter>
            <HomePage></HomePage>
          </BrowserRouter>
        </Provider>
      );
      const tittle = screen.getByRole("heading", {
        name: "Pick a language and start exploring",
      });

      expect(tittle).toBeInTheDocument();
    });
  });
});
