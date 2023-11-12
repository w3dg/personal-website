import { TbBrandGithub } from "react-icons/tb";
import { LuLink } from "react-icons/lu";
import { IconContext } from "react-icons";

import { TagList } from "../components/TagList";

import Project from "../interfaces/Project";
import { useTheme } from "../providers/ThemeProvider";
import clsx from "clsx";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const theme = useTheme();

  return (
    <div
      className={clsx("w-full max-w-sm rounded-md group grid grid-rows-[auto_1fr_auto] shadow-lg", {
        "bg-neutral-900": theme.themeState === "dark",
        "bg-neutral-200": theme.themeState === "light",
      })}
    >
      <div className="overflow-hidden rounded-md h-44">
        <img
          src={project.imageUrl}
          alt={project.description}
          className="object-cover transition-transform duration-100 brightness-75 saturate-50 group-hover:saturate-100 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col gap-2 p-4">
        <h2 className="text-xl font-semibold">{project.projectName}</h2>
        <p className="text-neutral-500">{project.description}</p>
        <TagList tags={project.tags}></TagList>
      </div>

      <div className="px-4 py-4">
        <IconContext.Provider
          value={{
            className: clsx({
              "text-slate-300/60 hover:text-blue-300": theme.themeState === "dark",
              "text-slate-600 hover:text-blue-500": theme.themeState === "light",
            }),
            size: "1.4rem",
          }}
        >
          <ul className="flex gap-3">
            <li>
              <a href={project.src} target="_blank">
                <TbBrandGithub></TbBrandGithub>
              </a>
            </li>
            <li>
              <a href={project.link} target="_blank">
                <LuLink></LuLink>
              </a>
            </li>
          </ul>
        </IconContext.Provider>
      </div>
    </div>
  );
};
