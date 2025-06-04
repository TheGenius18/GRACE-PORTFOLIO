import { Link } from "react-scroll";

const links = [
  { link: "How It Works", section: "services" },
  { link: "Features", section: "features" },
  { link: "For the Therapist", section: "therapist" },
  { link: "About Us", section: "about" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex lg:flex-row px-5 sm:rounded-full lg:bg-opacity-[0] sm:bg-black sm:flex-col gap-6 text-white font-body lg:relative sm:absolute text-center left-[50%] -translate-x-[50%] lg:text-md sm:text-xl  backdrop-blur-lg lg:bg-transparent sm:w-full py-4 z-[500]">
      {links.map((link, index) => {
        return (
          <li key={index} className="group">
            <Link
              spy={true}
              smooth={true}
              duration={500}
              offset={-130}
              to={link.section}
              className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
            >
              {link.link}
            </Link>
            <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
          </li>
        );
      })}
    </ul>
  );
};

export default NavbarLinks;
