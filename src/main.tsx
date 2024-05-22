// Importing necessary modules and components
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import RepoPage from "./pages/RepoPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import Navbar from "./components/Navbar.tsx";
import { Analytics } from "@vercel/analytics/react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Analytics />
    <BrowserRouter basename="/">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/portfolio/:repoName" element={<RepoPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </ThemeProvider>
);
