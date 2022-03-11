import { render } from "@testing-library/react";
import userInterface from "../../redux/interfaces/userInterface";
import GenericCard from "./GenericCard";

describe("Given a GenericCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should", () => {
      const guestUser: userInterface = {
        name: "New exited User",
        lastname: "Happy",
        username: "",
        email: "",
        password: "",
        pet: "",
        membership: "",
        scoreHistoryWpm: [],
        snippetsJavaScript: [],
        snippetsPhyton: [],
        snippetsCsharp: [],
        scoreHistoryAccuracy: [],
        scoreHistoryPerCharacter: [], //ojuuu ehhh que eesto esta mal y hay que revisarlo
        snippetsTypeScript: [],
        snippetsCollection: [],
      };
      render(<GenericCard userData={guestUser} />);
    });
  });
});
