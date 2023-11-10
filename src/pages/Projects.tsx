import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectCard } from "../components/ProjectCard";

import Project from "../interfaces/Project";

const projectList: Project[] = [
  {
    projectName: "Job Listings",
    description: " A sample job listing site with filter tags",
    imageUrl: "/project-sc/job-listings.png",
    link: "https://job-listings-with-filtering-phi.vercel.app/",
    src: "https://github.com/w3dg/",
    tags: ["ReactJS", "Typescript", "TailwindCSS"],
  },
  {
    projectName: "github-profile-search",
    description: " Searches Github by username and shows top information.",
    imageUrl: "/project-sc/profile-search.png",
    link: "https://github-profile-search.vercel.app/",
    src: "https://github.com/w3dg/github-profile-search",
    tags: ["API", "ReactJS", "CSS"],
  },
  {
    projectName: "Github Status",
    description: " A simple Github status page made with serverless functions.",
    imageUrl:
      "https://images.unsplash.com/photo-1590595906931-81f04f0ccebb?auto=format&fit=crop&q=80&w=1740&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://ghstatus.vercel.app/",
    src: "https://github.com/w3dg/github-status",
    tags: ["API", "HTML", "CSS", "JS"],
  },
  {
    projectName: "linkcl",
    description: " A CLI tool to clean up your links of the various tracking parameters.",
    imageUrl:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmiro.medium.com%2Fmax%2F7654%2F1*KDZTfB2dvoNUgqc3AVqDAQ.jpeg&f=1&nofb=1&ipt=e4ff9d4bbfd8b9505fe76dccff206f84237f96fec3a8819a0cf800b1d0d63841&ipo=images",
    link: "https://www.npmjs.com/package/linkcl",
    src: "https://github.com/w3dg/linkcl",
    tags: ["NodeJS", "CLI"],
  },
  {
    projectName: "http-status-code-lookup",
    description: " A CLI tool to quickly look up what a http status code means.",
    imageUrl:
      "https://images.pexels.com/photos/2882570/pexels-photo-2882570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://github.com/w3dg/http-status-code-lookup",
    src: "https://github.com/w3dg/http-status-code-lookup",
    tags: ["CLI", "NodeJS"],
  },
];

export const Projects = () => {
  return (
    <>
      <Navbar></Navbar>
      <h2 className="my-8 text-2xl font-bold text-center lg:text-3xl">Projects</h2>
      <div className="grid items-stretch w-full max-w-screen-xl grid-cols-1 gap-8 px-6 py-4 mx-auto mb-40 place-items-center lg:grid-cols-3 lg:gap-12">
        {projectList.map((project) => {
          return <ProjectCard project={project} key={project.projectName}></ProjectCard>;
        })}
      </div>
      <Footer></Footer>
    </>
  );
};
