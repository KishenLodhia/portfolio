import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import TestPage from "./pages/TestPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/resume",
    element: <ResumePage />,
    errorElement: <NotFoundPage />,
  },

  {
    path: "/test",
    element: <TestPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
