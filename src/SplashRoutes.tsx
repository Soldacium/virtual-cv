import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { DefaultTheme } from "styled-components";
import Splash from "./Splash";
import WelcomePage from "./pages/welcome/welcome";
import JourneyPage from "./pages/journey/journey";
import SkillsPage from "./pages/skills/skills";

const themes: { [key: string]: DefaultTheme } = {
  home: {
    background: "#ffcccc",
  },
  about: {
    background: "#ccffcc",
  },
  contact: {
    background: "#ccccff",
  },
};

const AnimatedSplashRoutes: React.FC = () => {
  const location = useLocation();
  const currentTheme = themes[location.pathname.slice(1)] || themes.home;

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/about" element={<JourneyPage />} />
          <Route path="/contact" element={<SkillsPage />} />
        </Routes>
      </AnimatePresence>
      <AnimatePresence>
        <Splash key={location.pathname} color={currentTheme.background} />
      </AnimatePresence>
    </>
  );
};

export default AnimatedSplashRoutes;
