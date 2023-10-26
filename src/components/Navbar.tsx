import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="sticky inset-x-0 top-0 z-10 flex justify-between px-4 py-3 border-b-2 lg:px-6 border-neutral-50/10 bg-neutral-950/70 text-neutral-200 backdrop-blur-md lg:py-4">
        <Link to="/">DG</Link>
        <ul className="flex space-x-4">
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </ul>
      </nav>
    </>
  );
};
