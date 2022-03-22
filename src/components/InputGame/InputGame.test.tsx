import { render, screen } from "@testing-library/react";
import InputGame from "./InputGame";

describe("Given an InputGame component", () => {
  describe("When it receives a text via props", () => {
    test("Then it should display the text in the screen", () => {
      const someText = "I am some text in the screen";
      render(<InputGame text={someText}></InputGame>);
      const theShowedText = screen.getByText("am some text");
      expect(theShowedText).toBeInTheDocument();
    });
  });
});
