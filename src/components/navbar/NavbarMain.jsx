import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";
import ModeSwitch from "./ModeSwitch";
import { useSelector } from "react-redux";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);

  return (
    <nav className="max-w-[1300px] mx-auto w-full z-20">
      <div className="flex gap-4">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r rounded-l border-cyan border-opacity-[.3] border-[0.5px] bg-opacity-[.4]">
          <NavbarLogo />
          <div className="hidden lg:block">
            <NavbarLinks />
          </div>
          <ModeSwitch />
        </div>
        <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-cyan border-[0.5px] bg-opacity-[0.4]">
          <NavbarToggler />
        </div>
      </div>
      
      <div className={`lg:hidden w-full bg-opacity-90 transition-all duration-300 ease-in-out ${
  menuOpen ? 'block' : 'hidden'
}`}>
  <div className="p-4">
    <NavbarLinks mobile />
  </div>
</div>
    </nav>
  );
};

export default NavbarMain;