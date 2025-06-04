import { Link } from "react-scroll";

const NavbarLogo = () => {
  return (
    <div>
      <img
        src="/images/8.png"
        alt="grace logo"
        className="w-24 md:max-w-[570px] sm:hidden md:block cursor-pointer 
          drop-shadow-[0_0_10px_rgba(34,211,238,1)]
          hover:drop-shadow-[0_0_15px_rgba(34,211,238,1)]
          transition-all duration-300"
      />
      <img
        src="/images/10.png"
        alt="grace logo"
        className="md:hidden sm:max-w-[30px] cursor-pointer
        drop-shadow-[0_0_5px_rgba(34,211,238,0.7)]
        hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.9)]
        transition-all duration-300"
      />
    </div>
  );
};

export default NavbarLogo;
