import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Projects } from "./pages/Projects";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

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
      <div className="min-h-screen bg-neutral-950 text-neutral-100">
        <Navbar></Navbar>
        <RouterProvider router={router} />
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
