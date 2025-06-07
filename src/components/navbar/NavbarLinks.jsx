import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const NavbarLinks = ({ mobile = false }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const links = [
    { label: t("navbar.links.how"), section: "services" },
    { label: t("navbar.links.features"), section: "features" },
    { label: t("navbar.links.therapist"), section: "therapist" },
    { label: t("navbar.links.about"), section: "about" },
    { label: t("navbar.links.contact"), section: "contact" },
  ];

  return (
    <ul
      className={`flex ${
        mobile
          ? "flex-col items-center gap-6 text-xl py-6"
          : "flex-row gap-6 text-md"
      } font-body text-white ${isRTL ? "text-right" : "text-left"}`}
    >
      {links.map(({ label, section }, index) => (
        <li key={index} className="group">
          <Link
            spy={true}
            smooth={true}
            duration={500}
            offset={-130}
            to={section}
            className="cursor-pointer hover:text-cyan transition-all duration-300"
          >
            {label}
          </Link>
          <div className="mx-auto bg-cyan w-0 group-hover:w-full h-[1px] transition-all duration-300"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;
