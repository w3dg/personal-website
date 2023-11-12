import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LuSunMedium, LuMoon } from "react-icons/lu";

import { useTheme } from "../providers/ThemeProvider";

export const Navbar = () => {
  const theme = useTheme();

  const [scrolledPast, setScrolledPast] = useState(false);
  const threshold = 60;

  const handleScroll = () => {
    if (window.scrollY > threshold) {
      setScrolledPast(true);
    } else {
      setScrolledPast(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={
          "sticky inset-x-0 top-0 z-10 flex justify-between px-4 py-3 lg:px-6  backdrop-blur-md lg:py-4" +
          (scrolledPast ? " shadow-lg shadow-neutral-900" : "") +
          (theme.themeState === "dark" ? "bg-neutral-950/70 text-neutral-200" : "bg-neutral-200/70 text-neutral-900")
        }
      >
        <Link to="/">DG</Link>
        <ul className="flex space-x-4">
          <button onClick={theme.toggleTheme}>
            {theme.themeState === "dark" ? <LuSunMedium></LuSunMedium> : <LuMoon></LuMoon>}
          </button>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};
