import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingView from "./views/landingView/LandingView";
import ProjectsView from "./views/projectsView/ProjectsView";
import ResumeView from "./views/resumeView/ResumeView";
import ContactView from "./views/contactView/ContactView";
import { Navbar } from "./components/navbar/Navbar";
import { useScrollToTopOnPathChange as ScrollToTop } from "./hooks/useScrollToTopOnPathChange";
import "./i18n";

const App = () => {
  return (
    <BrowserRouter basename="/portfolio">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<LandingView />} />
          <Route path="/projects" element={<ProjectsView />} />
          <Route path="/cv" element={<ResumeView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
