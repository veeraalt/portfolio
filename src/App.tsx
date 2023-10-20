import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingView from "./views/landingView/LandingView";
import ProjectsView from "./views/projectsView/ProjectsView";
import ResumeView from "./views/resumeView/ResumeView";
import ContactView from "./views/contactView/ContactView";
import ToggleButton from "./components/toggleButton/ToggleButton";
import { useColorScheme } from "./hooks/useColorScheme";

function App() {
  const { isDarkModeOn, handleDarkModeToggle } = useColorScheme();
  return (
    <main>
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<LandingView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/cv" element={<ResumeView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </BrowserRouter>
      <ToggleButton
        onClick={handleDarkModeToggle}
        value={isDarkModeOn}
        offText="Light mode"
        onText="Dark mode"
      />
    </main>
  );
}

export default App;
