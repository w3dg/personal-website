import { IconContext } from "react-icons";
import { LuMail, LuGithub, LuContact } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-10 border-t-2 border-neutral-900">
      <div className="grid w-full max-w-lg gap-1 mx-auto place-items-center text-neutral-600">
        <p>made with &lt;3 and coffee</p>
        <p>&copy;{currentYear} DG Media All Rights Reserved</p>
        <ul className="flex gap-2">
          <IconContext.Provider value={{ className: "text-neutral-500 hover:text-neutral-100" }}>
            <li>
              <a href="mailto:w3dg@duck.com">
                <LuMail></LuMail>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/gh">
                <LuGithub></LuGithub>
              </a>
            </li>
            <li>
              <Link to={"/contact"}>
                <LuContact></LuContact>
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </footer>
  );
};
