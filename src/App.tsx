import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingView from "./views/landingView/LandingView";
import ProjectsView from "./views/projectsView/ProjectsView";
import ResumeView from "./views/resumeView/ResumeView";
import ContactView from "./views/contactView/ContactView";
import { ToggleButton } from "./components/toggleButton/ToggleButton";
import { Navbar } from "./components/navbar/Navbar";
import { useColorScheme } from "./hooks/useColorScheme";

const App = () => {
  const { isDarkModeOn, handleDarkModeToggle } = useColorScheme();
  return (
    <BrowserRouter basename="/portfolio">
      <Navbar />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<LandingView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/cv" element={<ResumeView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
        <ToggleButton
          onClick={handleDarkModeToggle}
          value={isDarkModeOn}
          offLabel="Light mode"
          onLabel="Dark mode"
        />
      </main>
    </BrowserRouter>
  );
};

export default App;
