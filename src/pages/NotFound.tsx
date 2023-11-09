import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="grid gap-8 mt-48 text-center place-content-center">
        <img src="/not-found.svg" alt="Not found" className="w-64" />
        <h1>Oops! The page is not found</h1>
        <p>
          Go{" "}
          <Link className="underline hover:text-neutral-400" to={"/"}>
            home
          </Link>
        </p>
      </div>
    </>
  );
};
