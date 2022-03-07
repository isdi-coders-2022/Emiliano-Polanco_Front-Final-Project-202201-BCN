import { render } from "@testing-library/react";
import GenericCard from "./GenericCard";

describe("Given a GenericCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should", () => {
      render(<GenericCard />);
    });
  });
});
