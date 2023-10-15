import { TbBrandGithub, TbBrandLinkedin, TbMailForward, TbBrandYoutube, TbBrandInstagram, TbBrandTwitch, TbBrandX, TbBrandDiscord, TbQuote, TbArrowUpRight } from "react-icons/tb";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";

export const Home = () => {
  return (
    <>
      <IconContext.Provider value={{ color: "#6b7280", size: "1.5rem" }}>
        <section>
          <div className="relative h-56 bg-neutral-400 bg-blend-multiply bg-[url('/neon-bg.jpg')] bg-no-repeat bg-center bg-cover before:content[''] before:absolute before:inset-0 before:bg-gradient-to-b before:from-neutral-800/10 before:to-neutral-950"></div>
          <div className="relative grid px-2 place-items-center">
            <div className="absolute w-48 h-48 -top-24 drop-shadow-lg profile">
              <img src="/self.jpeg" alt="Self" />
            </div>
            <div className="grid gap-3 place-items-center">
              <p className="mt-32 text-2xl lg:text-3xl animate-inverseFadeX">Debopam Gupta</p>
              <p className="text-2xl font-bold text-slate-100 lg:text-3xl animate-fadeX">Full Stack Developer</p>
              <div className="w-48 h-px max-w-lg my-2 gradient-stroke animate-inverseFadeX"></div>
            </div>
          </div>
        </section>
        <section className="relative grid max-w-lg mx-auto mt-3 py-7 place-items-center">
          <div className="absolute top-4 right-8 opacity-20">
            <IconContext.Provider value={{ color: "#94a3b8", size: "5rem" }}>
              <TbQuote></TbQuote>
            </IconContext.Provider>
          </div>
          <div className="opacity-0 animate-fadeYUp">
            <p className="max-w-md m-4 text-2xl text-center">Building things for the web that aims to make people's lives better</p>
            <p className="max-w-md mx-5 text-lg text-center">Currently as a student in Computer Science and Engineering, I'm eager to learn and apply my knowledge for the better.</p>
          </div>
        </section>

        <section className="h-32 px-6 my-10">
          <h2 className="w-6/12 mx-auto mb-8 text-xl text-center opacity-0 social-heading">On The Internet</h2>
          <ul className="flex flex-wrap items-center justify-center w-8/12 gap-6 mx-auto socials">
            <li>
              <a href="https://dgsh.vercel.app/gh">
                <TbBrandGithub></TbBrandGithub>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/li">
                <TbBrandLinkedin></TbBrandLinkedin>
              </a>
            </li>
            <li>
              <a href="mailto:w3dg@duck.com">
                <TbMailForward></TbMailForward>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/yt">
                <TbBrandYoutube></TbBrandYoutube>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/ig">
                <TbBrandInstagram></TbBrandInstagram>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/twitch">
                <TbBrandTwitch></TbBrandTwitch>
              </a>
            </li>
            <li>
              <a href="https://dgsh.vercel.app/twitter">
                <TbBrandX></TbBrandX>
              </a>
            </li>
            <li>
              <a href="https://discord.com/users/613575716201824266">
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
            <Link to="/projects" className="inline-flex items-center gap-1 btn">
              Project Showcase <TbArrowUpRight />
            </Link>

            <Link to="/contact" className="inline-flex items-center gap-1 btn">
              Contact Me <TbArrowUpRight />
            </Link>
          </IconContext.Provider>
        </section>
      </IconContext.Provider>
    </>
  );
};
