import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarHomeBtn = () => {
  const { t } = useTranslation();
  return (
    <Link to="/" className="...">
      {t("navbar.buttons.home")}
    </Link>
  );
};

export default NavbarHomeBtn;
