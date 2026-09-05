import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useScrollReveal } from "./hooks/useScrollReveal";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import CertificationsPage from "./pages/CertificationsPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  useScrollReveal();

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <>
      <ScrollToTop />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<CertificationsPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
