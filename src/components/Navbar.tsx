export const Navbar = () => {
  return (
    <>
      <nav className="sticky top-0 z-10 flex justify-between px-4 py-3 border-b-2 lg:px-6 border-neutral-50/10 bg-neutral-950/70 text-neutral-200 backdrop-blur-md lg:py-4">
        <div>DG</div>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="link">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};
