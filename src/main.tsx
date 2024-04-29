// Importing necessary modules and components
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/theme-provider.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AboutPage from "./pages/AboutPage.tsx";
import ResumePage from "./pages/ResumePage.tsx";
import PortfolioPage from "./pages/PortfolioPage.tsx";
import RepoPage from "./pages/RepoPage.tsx";
import { Toaster } from "./components/ui/sonner.tsx";
import Navbar from "./components/Navbar.tsx";

// Creating the router with the routes for the application
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
    path: "/portfolio",
    element: <PortfolioPage />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/portfolio/:repoName",
    element: <RepoPage />,
    errorElement: <NotFoundPage />,
  },
]);

// Rendering the application into the root element
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <Navbar />

    <RouterProvider router={router} />

    <Toaster />
  </ThemeProvider>
  // </React.StrictMode>
);
