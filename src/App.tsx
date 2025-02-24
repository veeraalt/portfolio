import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingView from "./views/landingView/LandingView";
import ProjectsView from "./views/projectsView/ProjectsView";
import ResumeView from "./views/resumeView/ResumeView";
import ContactView from "./views/contactView/ContactView";
import ArttView from "./views/artView/ArtView";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { useScrollToTopOnPathChange as ScrollToTop } from "./hooks/useScrollToTopOnPathChange";
import { ThemeProvider } from "./hooks/useColorScheme";
import "./i18n";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/">
        <ScrollToTop />
        <Navbar />
        <main>
          <Routes>
            <Route path="*" element={<Navigate to="/" replace />} />
            <Route path="/" element={<LandingView />} />
            <Route path="/projects" element={<ProjectsView />} />
            <Route path="/cv" element={<ResumeView />} />
            <Route path="/contact" element={<ContactView />} />
            <Route path="/cssart" element={<ArttView />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
