import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";

import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import GamePage from "./pages/GamePage/GamePage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import CreateSnippetPage from "./pages/ProfileUserPage/CreateSnippetPage";
import EditSnippetPage from "./pages/ProfileUserPage/EditSnippetPage";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter={true} initial={false}>
        <Suspense fallback={<h1>Loading... </h1>}>
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/game" element={<GamePage />}>
              <Route path="javascript/:id" element={<GamePage />} />
              <Route path="typescript/:id" element={<GamePage />} />
            </Route>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-in" element={<RegisterPage />} />
            <Route path="/profile" element={<ProfileUserPage />} />
            <Route path="/edit-snippet" element={<EditSnippetPage />} />
            <Route path="/create-snippet" element={<CreateSnippetPage />} />
            <Route path="*" element={<ProfileUserPage />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </>
  );
}

export default App;
