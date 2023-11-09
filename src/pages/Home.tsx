import { TbBrandDiscord } from "react-icons/tb";
import {
  LuQuote,
  LuGithub,
  LuLinkedin,
  LuMail,
  LuYoutube,
  LuInstagram,
  LuTwitch,
  LuTwitter,
  LuArrowUpRight,
} from "react-icons/lu";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <IconContext.Provider value={{ className: "text-slate-400 hover:text-slate-100", size: "1.5rem" }}>
        <section>
          <div className="relative h-72 bg-neutral-950 pattern before:content[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-800/10 before:to-neutral-950"></div>
          <div className="relative grid px-2 place-items-center">
            <div className="absolute w-48 h-48 -top-24 drop-shadow-lg profile">
              <img src="/self.jpeg" alt="Self" />
            </div>
            <div className="grid gap-3 place-items-center">
              <p className="mt-32 text-2xl lg:text-3xl">Debopam Gupta</p>
              <p className="text-2xl font-bold text-slate-100 lg:text-3xl">Full Stack Developer</p>
              <div className="w-48 h-px max-w-lg my-2 gradient-stroke"></div>
            </div>
          </div>
        </section>
        <section className="relative grid max-w-lg mx-auto mt-3 py-7 place-items-center">
          <div className="absolute -top-2 right-4 opacity-20">
            <IconContext.Provider value={{ size: "3rem", className: "text-neutral-400" }}>
              <LuQuote></LuQuote>
            </IconContext.Provider>
          </div>
          <p className="max-w-md m-2 text-2xl text-center">
            Building things for the web that aims to make people's lives better
          </p>
        </section>

        <section className="h-32 px-6 my-10">
          <h2 className="w-6/12 mx-auto mb-8 text-xl text-center social-heading">On The Internet</h2>
          <ul className="flex flex-wrap items-center justify-center w-8/12 gap-6 mx-auto">
            <li>
              <a href="https://dgsh.vercel.app/gh" target="_blank">
                <LuGithub></LuGithub>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/li" target="_blank">
                <LuLinkedin></LuLinkedin>
              </a>
            </li>
            <li>
              <a href="mailto:w3dg@duck.com" target="_blank">
                <LuMail></LuMail>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/yt" target="_blank">
                <LuYoutube></LuYoutube>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/ig" target="_blank">
                <LuInstagram></LuInstagram>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/twitch" target="_blank">
                <LuTwitch></LuTwitch>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/twitter" target="_blank">
                <LuTwitter></LuTwitter>
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/613575716201824266" target="_blank">
                <TbBrandDiscord></TbBrandDiscord>
              </a>
            </li>
          </ul>
        </section>

        <div className="w-48 h-px max-w-lg mx-auto mt-20 gradient-divider"></div>

        <section className="w-full max-w-xl px-5 py-10 mx-auto mt-5">
          <h2 className="my-2 text-2xl text-center">How may I help you</h2>
          <div className="grid grid-cols-4 grid-rows-3 my-4 mt-8 text-center lg:text-lg">
            <div className="row-start-1 p-5 my-2 rounded-md bg-neutral-900 col-span-full md:col-span-2">
              <p>Dream</p>
              <p className="text-sm">Your dream, my vision</p>
            </div>
            <div className="row-start-2 p-5 my-2 rounded-md bg-neutral-800 col-span-full md:col-span-2 md:col-start-2">
              <p>Design</p>
              <p className="text-sm">All the dazzle</p>
            </div>
            <div className="row-start-3 p-5 my-2 rounded-md bg-neutral-700 col-span-full md:col-span-2 md:col-start-3">
              <p>Develop</p>
              <p className="text-sm">Let me do the heavylifting</p>
            </div>
          </div>
        </section>

        <section className="grid w-full max-w-lg gap-5 pt-10 mx-auto text-center pb-14 place-items-center">
          <IconContext.Provider value={{ color: "#7a7a7a", size: "1.5rem" }}>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-6 py-4 transition-transform duration-300 rounded-full group bg-neutral-200 text-neutral-800"
            >
              Project Showcase
              <div className="p-1 transition-transform rounded-full group-hover:bg-neutral-900 group-hover:rotate-45">
                <LuArrowUpRight />
              </div>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-1 px-6 py-4 transition-transform duration-300 rounded-full group bg-neutral-200 text-neutral-800"
            >
              Contact Me
              <div className="p-1 transition-transform rounded-full group-hover:bg-neutral-900 group-hover:rotate-45">
                <LuArrowUpRight />
              </div>
            </Link>
          </IconContext.Provider>
        </section>
      </IconContext.Provider>
      <Footer></Footer>
    </>
  );
};
