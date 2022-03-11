import { render } from "@testing-library/react";
import userInterface from "../../redux/interfaces/userInterface";
import SnippetCollectionCard from "./SnippetCollectionCard";

describe("Given a SnippetCollectionCard component", () => {
  describe("When it's rendered with a JavaScript language", () => {
    test("Then it should", () => {
      render(
        <SnippetCollectionCard
          language="JavaScript"
          title="the superSnippet"
          key={"magician"}
        />
      );
    });
  });

  describe("When it's rendered with a typeScripts language", () => {
    test("Then it should", () => {
      render(
        <SnippetCollectionCard
          language="TypeScript"
          title="the superfdsaSnippet"
          key={"magfdn"}
        />
      );
    });
  });

  describe("When it's rendered with an unknow language", () => {
    test("Then it should", () => {
      render(
        <SnippetCollectionCard
          language="phytonUbunto"
          title="the superfdsaSnippet"
          key={"magfdn"}
        />
      );
    });
  });
});
