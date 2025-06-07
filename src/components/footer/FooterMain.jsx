import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const FooterMain = () => {
  const { t } = useTranslation();

  const footerLinks = [
    { name: t("footer.howItWorks"), section: "services" },
    { name: t("footer.features"), section: "features" },
    { name: t("footer.therapist"), section: "therapist" },
    { name: t("footer.about"), section: "about" },
  ];

  return (
    <div className="px-4">
      <div className="w-full h-[1px] bg-cyan mt-24"></div>
      <div className="md:flex justify-between mt-4 max-w-[1200px] mx-auto sm:hidden">
        <p className="text-3xl text-cyan">
          GRACE <span className="text-lightCyan">{t("footer.subtitle")}</span>
        </p>
        <ul className="flex gap-4 text-darkCyan text-xl">
          {footerLinks.map((item, index) => (
            <li key={index}>
              <Link
                spy={true}
                smooth={true}
                duration={500}
                offset={-120}
                to={item.section}
                className="hover:text-white transition-all duration-500 cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-lightBrown">
        © 2025 GRACE | {t("footer.rights")}
      </p>
    </div>
  );
};

export default FooterMain;
