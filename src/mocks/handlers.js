// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
  // Handles a POST /login request
  rest.post(
    "https://apirest-website.onrender.com/users/login",
    (req, res, ctx) => {
      // Persist user's authentication in the session
      debugger;
      return res(
        // Respond with a 200 status code
        ctx.status(200),
        ctx.json({ data: { token: "i ama  token " } })
      );
    }
  ),
  // Handles a GET /user request
  rest.get("/user", null),
];
