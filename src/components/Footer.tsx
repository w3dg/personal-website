import { TbBrandGithub, TbMailForward } from "react-icons/tb";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full py-10 border-t-2 border-neutral-800">
      <div className="grid w-full max-w-lg gap-1 mx-auto place-items-center text-neutral-600">
        <p>made with &lt;3 and coffee</p>
        <p>&copy;{currentYear} DG Media All Rights Reserved</p>
        <ul className="flex gap-2">
          <li>
            <a href="mailto:w3dg@duck.com">
              <TbMailForward></TbMailForward>
            </a>
          </li>
          <li>
            <a href="https://dgsh.vercel.app/gh">
              <TbBrandGithub></TbBrandGithub>
            </a>
          </li>
          <li>
            <a href="mailto:w3dg@duck.com">
              <TbMailForward></TbMailForward>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
