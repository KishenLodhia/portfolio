import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Analytics } from "@vercel/analytics/react";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import ScrollManager from "./components/ScrollManager.tsx";
import HomePage from "./pages/HomePage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import RepoPage from "./pages/RepoPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <ScrollManager />
        <div className="flex min-h-dvh flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/portfolio" element={<PortfolioPage />} />
              <Route path="/portfolio/:repoName" element={<RepoPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <div className="print:hidden">
            <Footer />
          </div>
        </div>
      </BrowserRouter>
      <Analytics />
    </ThemeProvider>
  </StrictMode>
);
