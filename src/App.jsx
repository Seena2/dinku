import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import ProjectsPage from "./pages/ProjectsPage";
import BlogsPage from "./pages/BlogsPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
