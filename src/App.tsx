import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

import { useTheme } from "./providers/ThemeProvider";

import "./App.css";
import clsx from "clsx";

function App() {
  const theme = useTheme();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <NotFound />,
    },
    {
      path: "/projects",
      element: <Projects />,
      errorElement: <NotFound />,
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <NotFound />,
    },
  ]);

  return (
    <>
      <div
        className={clsx("min-h-screen ", {
          "bg-neutral-950 text-neutral-100": theme.themeState === "dark",
          "bg-neutral-100 text-neutral-800": theme.themeState === "light",
        })}
      >
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
