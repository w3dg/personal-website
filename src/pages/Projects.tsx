import { TbGlobe, TbBrandGithub } from "react-icons/tb";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { IconContext } from "react-icons";

const projectList = [
  {
    projectName: "github-status",
    description: " A simple Github status page made with serverless functions.",
    imageUrl: "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://ghstatus.vercel.app/",
    src: "https://github.com/w3dg/github-status",
  },
  {
    projectName: "github-profile-search",
    description: " Searches Github by username and shows top information.",
    imageUrl: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?auto=format&fit=crop&q=80&w=1685&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://github-profile-search.vercel.app/",
    src: "https://github.com/w3dg/github-profile-search",
  },
  {
    projectName: "linkcl",
    description: " A CLI tool to clean up your links of the various tracking parameters.",
    imageUrl: "https://images.unsplash.com/photo-1606778303077-3780ea8d5420?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://www.npmjs.com/package/linkcl",
    src: "https://github.com/w3dg/linkcl",
  },
  {
    projectName: "http-status-code-lookup",
    description: " A CLI tool to quickly look up what a http status code means.",
    imageUrl: "https://images.pexels.com/photos/2882570/pexels-photo-2882570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/w3dg/http-status-code-lookup",
    src: "https://github.com/w3dg/http-status-code-lookup",
  },
];

export const Projects = () => {
  return (
    <>
      <Navbar></Navbar>
      <h2 className="my-4 text-2xl text-center lg:text-3xl">Projects</h2>
      <div className="grid w-full max-w-screen-xl grid-cols-1 gap-8 px-6 py-4 mx-auto mb-40 place-items-center lg:grid-cols-3 lg:gap-12">
        {projectList.map((project, index) => {
          return (
            <div className="w-full max-w-sm rounded-md bg-neutral-900 group" key={index}>
              <div className="overflow-hidden rounded-md h-44">
                <img src={project.imageUrl} alt={project.description} className="object-contain brightness-75 saturate-50 group-hover:saturate-100" />
              </div>
              <div className="grid gap-2 m-5">
                <h2 className="text-xl font-semibold text-neutral-300">{project.projectName}</h2>
                <p className="text-neutral-500">{project.description}</p>
                <IconContext.Provider value={{ color: "#6b7280", size: "1.5rem" }}>
                  <ul className="flex justify-end gap-6">
                    <li>
                      <a href={project.src}>
                        <TbBrandGithub></TbBrandGithub>
                      </a>
                    </li>
                    <li>
                      <a href={project.link}>
                        <TbGlobe></TbGlobe>
                      </a>
                    </li>
                  </ul>
                </IconContext.Provider>
              </div>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </>
  );
};
