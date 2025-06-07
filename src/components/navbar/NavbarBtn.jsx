import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavbarEmergencyBtn = () => {
  const { t } = useTranslation();
  return (
    <Link to="/Emergency" className="...">
      {t("navbar.buttons.emergency")}
    </Link>
  );
};

export default NavbarEmergencyBtn;
