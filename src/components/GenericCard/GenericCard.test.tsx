import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import userInterface from "../../redux/interfaces/userInterface";
import GenericCard from "./GenericCard";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

const guestUser: userInterface = {
  name: "New exited User",
  lastname: "Happy",
  username: "",
  email: "",
  password: "",
  pet: "",
  membership: "",
  scoreHistoryWpm: [],
  snippetsJavaScript: [
    {
      _id: "62273e455e1654cd7ad00941",
      language: "JavaScript",
      textCode:
        // eslint-disable-next-line no-template-curly-in-string
        'const startServer = (app, port) =>\r\n  new Promise((resolve, reject) => {\r\n    const server = app.listen(port, () => {\r\n      debug(`The server it\'s up in http://localhost:${port}`);\r\n      resolve();\r\n    });\r\n\r\n    server.on("error", (error) => {\r\n      debug(`Oh no the server couldnt start ${error.message}`);\r\n      reject();\r\n    });\r\n  });\r\n\r\nmodule.exports = startServer;',
      title: "start an express server",
    },
    {
      _id: "62273ed65e1654cd7ad00943",
      language: "JavaScript",
      textCode:
        'require("dotenv").config();\r\nconst cors = require("cors");\r\nconst express = require("express");\r\nconst morgan = require("morgan");\r\nconst { notFoundError, internalServerError } = require("./middlewares/errors");\r\nconst loginRouter = require("./routers/loginRouter");\r\nconst robotsRouter = require("./routers/robotsRouter");\r\n\r\nconst app = express();\r\n\r\napp.use(cors());\r\napp.use(morgan("dev"));\r\napp.use(express.json());\r\napp.use("/robots", robotsRouter);\r\napp.use("/login", loginRouter);',
      title: "normal chain of middlewares",
    },
  ],
  snippetsPhyton: [],
  snippetsCsharp: [],
  scoreHistoryAccuracy: [],
  scoreHistoryPerCharacter: [], //ojuuu ehhh que eesto esta mal y hay que revisarlo
  snippetsTypeScript: [
    {
      _id: "6228b158611c53bc237d8c09",
      language: "TypeScript",
      textCode:
        'function padLeft(padding: number | string, input: string) {\r\n  if (typeof padding === "number") {\r\n    return " ".repeat(padding) + input;\r\n  }\r\n  return padding + input;\r\n}',
      title: "basics of typeScript",
    },
  ],
  snippetsCollection: [
    {
      _id: "62273e455e1654cd7ad00941",
      language: "JavaScript",
      textCode:
        // eslint-disable-next-line no-template-curly-in-string
        'const startServer = (app, port) =>\r\n  new Promise((resolve, reject) => {\r\n    const server = app.listen(port, () => {\r\n      debug(`The server it\'s up in http://localhost:${port}`);\r\n      resolve();\r\n    });\r\n\r\n    server.on("error", (error) => {\r\n      debug(`Oh no the server couldnt start ${error.message}`);\r\n      reject();\r\n    });\r\n  });\r\n\r\nmodule.exports = startServer;',
      title: "start an express server",
    },
    {
      _id: "62273ed65e1654cd7ad00943",
      language: "JavaScript",
      textCode:
        'require("dotenv").config();\r\nconst cors = require("cors");\r\nconst express = require("express");\r\nconst morgan = require("morgan");\r\nconst { notFoundError, internalServerError } = require("./middlewares/errors");\r\nconst loginRouter = require("./routers/loginRouter");\r\nconst robotsRouter = require("./routers/robotsRouter");\r\n\r\nconst app = express();\r\n\r\napp.use(cors());\r\napp.use(morgan("dev"));\r\napp.use(express.json());\r\napp.use("/robots", robotsRouter);\r\napp.use("/login", loginRouter);',
      title: "normal chain of middlewares",
    },
    {
      _id: "6228b158611c53bc237d8c09",
      language: "TypeScript",
      textCode:
        'function padLeft(padding: number | string, input: string) {\r\n  if (typeof padding === "number") {\r\n    return " ".repeat(padding) + input;\r\n  }\r\n  return padding + input;\r\n}',
      title: "basics of typeScript",
    },
  ],
};

describe("Given a GenericCard component", () => {
  describe("When it's rendered", () => {
    test("Then it should return", () => {
      render(
        <BrowserRouter>
          <GenericCard userData={guestUser} />
        </BrowserRouter>
      );

      const title1 = screen.getByRole("heading", {
        name: /start an express server/i,
      });
      const title2 = screen.getByRole("heading", {
        name: /normal chain of middlewares/i,
      });
      const title3 = screen.getByRole("heading", {
        name: /basics of typeScript/i,
      });
      expect(title1).toBeInTheDocument();
      expect(title2).toBeInTheDocument();
      expect(title3).toBeInTheDocument();
    });
  });

  describe("When it's rendered and someone click the All button", () => {
    test("Then it should change its state", () => {
      render(
        <BrowserRouter>
          <GenericCard userData={guestUser} />
        </BrowserRouter>
      );
      const deletebutton = screen.getByRole("button", { name: "All" });

      userEvent.click(deletebutton);

      const snippetJs = screen.getByRole("link", {
        name: "start an express server JS",
      });

      expect(snippetJs).toBeInTheDocument();
    });
  });

  describe("When it's rendered and someone clicks the JavaScript button", () => {
    test("Then it should change its state", () => {
      render(
        <BrowserRouter>
          <GenericCard userData={guestUser} />
        </BrowserRouter>
      );
      const jsButton = screen.getByRole("button", { name: "JavaScript" });

      userEvent.click(jsButton);

      const snippetJs = screen.getByRole("link", {
        name: "start an express server JS",
      });

      expect(snippetJs).toBeInTheDocument();
    });
  });

  describe("When it's rendered and someone clicks the TypeScript button", () => {
    test("Then it should change its state", async () => {
      render(
        <BrowserRouter>
          <GenericCard userData={guestUser} />
        </BrowserRouter>
      );
      const tsButton = screen.getByRole("button", { name: "TypeScript" });
      userEvent.click(tsButton);

      const snippetJs = screen.getByRole("link", {
        name: "basics of typeScript TS",
      });

      expect(snippetJs).toBeInTheDocument();
    });
  });
});
