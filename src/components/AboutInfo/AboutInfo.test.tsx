import { render } from "@testing-library/react";

import AboutInfo from "./AboutInfo";

describe("Given an AboutInfo componetn", () => {
  describe("When it's rendered", () => {
    test("Then it should display a title", () => {
      render(<AboutInfo></AboutInfo>);
    });
  });
});
