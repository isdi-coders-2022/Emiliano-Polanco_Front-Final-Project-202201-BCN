import { Suspense } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import CreateSnippetPage from "./pages/ProfileUserPage/CreateSnippetPage";
import EditSnippetPage from "./pages/ProfileUserPage/EditSnippetPage";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";

function App() {
  return (
    <>
      <Suspense fallback={<h1>Loading... </h1>}>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/profile" element={<ProfileUserPage />} />
          <Route path="/edit-snippet" element={<EditSnippetPage />} />
          <Route path="/create-snippet" element={<CreateSnippetPage />} />
          <Route path="*" element={<ProfileUserPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
