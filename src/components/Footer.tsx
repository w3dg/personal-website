import clsx from "clsx";
import { IconContext } from "react-icons";
import { LuMail, LuGithub, LuContact } from "react-icons/lu";
import { Link } from "react-router-dom";
import { useTheme } from "../providers/ThemeProvider";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const theme = useTheme();

  return (
    <footer
      className={clsx("w-full xl:max-w-xl xl:mx-auto py-10 border-t-2 border-neutral-700/20", {
        "bg-neutral-100 text-neutral-900": theme.themeState === "light",
        "bg-neutral-950 text-neutral-200": theme.themeState === "dark",
      })}
    >
      <div className="grid w-full max-w-lg gap-1 mx-auto place-items-center text-neutral-600">
        <p>made with &lt;3 and coffee</p>
        <p>&copy;{currentYear} DG Media All Rights Reserved</p>
        <ul className="flex gap-2">
          <IconContext.Provider
            value={{
              className: clsx({
                "text-neutral-500 hover:text-neutral-100": theme.themeState === "dark",
                "text-neutral-500 hover:text-neutral-800": theme.themeState === "light",
              }),
            }}
          >
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
