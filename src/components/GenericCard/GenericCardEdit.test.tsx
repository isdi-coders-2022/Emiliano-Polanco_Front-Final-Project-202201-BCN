import { render } from "@testing-library/react";
import GenericCardEdit from "./GenericCardEdit";

describe("Given a GenericCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should", () => {
      render(<GenericCardEdit />);
    });
  });
});
