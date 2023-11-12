import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

import { ThemeProvider } from "./providers/ThemeProvider";

import "./App.css";

function App() {
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
      <ThemeProvider>
        <div className="min-h-screen bg-neutral-950 text-neutral-100">
          <RouterProvider router={router} />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
