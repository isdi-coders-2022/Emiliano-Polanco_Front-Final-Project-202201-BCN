import { render, screen } from "@testing-library/react";
import SnippetCollectionCard from "./SnippetCollectionCard";

describe("Given a SnippetCollectionCard component", () => {
  describe("When it's rendered with a JavaScript language", () => {
    test("Then it should render the JS acronym", () => {
      render(
        <SnippetCollectionCard
          language="JavaScript"
          title="the superSnippet"
          key={"magician"}
        />
      );

      const text = screen.getByText("JS");

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered with a typeScripts language", () => {
    test("Then it should render an acronym text TS", () => {
      render(
        <SnippetCollectionCard
          language="TypeScript"
          title="the superfdsaSnippet"
          key={"magfdn"}
        />
      );

      const text = screen.getByText("TS");

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it's rendered with an unknow language", () => {
    test("Then it should render the unknow text", () => {
      render(
        <SnippetCollectionCard
          language="phytonUbunto"
          title="the superfdsaSnippet"
          key={"magfdn"}
        />
      );

      const text = screen.getByText("unknow");

      expect(text).toBeInTheDocument();
    });
  });
});
