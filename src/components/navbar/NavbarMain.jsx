import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarToggler from "./NavbarToggler";
import LanguageSwitcher from "./LanguageSwitcher";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const NavbarMain = () => {
  const menuOpen = useSelector((state) => state.menu.menuOpen);
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <nav className="max-w-[1300px] mx-auto w-full z-50 relative">
      <div
        dir="ltr"
        className="flex justify-between items-center w-full max-w-[1200px] mx-auto bg-black p-6 rounded-r rounded-l border-cyan border-opacity-[.3] border-[0.5px] bg-opacity-[.4]"
      >
        <NavbarLogo />

        <div className="hidden lg:flex justify-between items-center w-full ml-10">
          <div className="absolute left-1/2 -translate-x-1/2">
            <NavbarLinks />
          </div>
          <div className="ml-auto flex items-center gap-4">
            <LanguageSwitcher />
            {/* أزلت ModeSwitch هنا إن لم يكن موجودًا */}
          </div>
        </div>

        <div className="flex items-center gap-3 lg:hidden ml-auto">
          <LanguageSwitcher />
          <NavbarToggler />
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden w-full transition-all duration-300 ease-in-out">
          <div className="p-4">
            <NavbarLinks mobile />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;
