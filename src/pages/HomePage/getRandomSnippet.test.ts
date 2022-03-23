import snippetInterface from "../../redux/interfaces/snippetInterface";
import mockAxios from "../../setupTests";
import { getRandomSnippet } from "./getRandomSnippet";

describe("Given a getRandomSnippet function", () => {
  describe("When it's called with a language", () => {
    test("Then it should return a snippet in that language", async () => {
      const apiResponse = {
        data: {
          title: "I am  a  snippet",
          language: "JavaScript",
          textCode: "I am some code",
        },
      };

      mockAxios.get.mockResolvedValueOnce(apiResponse);
      const randomSnippet: snippetInterface = await getRandomSnippet(
        "JavaScript"
      );

      expect(randomSnippet.language).toBe("JavaScript");
    });
  });
});
