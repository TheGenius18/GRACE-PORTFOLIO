import { useTranslation } from "react-i18next";

const FooterLine = () => {
  const { t } = useTranslation();

  return <div>{t("footer.line")}</div>;
};

export default FooterLine;
