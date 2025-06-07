// eslint-disable-next-line no-unused-vars
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";

const AboutUsText = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      className={`flex flex-col md:items-start sm:items-center ${
        isRTL ? "md:text-right sm:text-center" : "md:text-left sm:text-center"
      }`}
    >
      <h2 className="text-6xl text-cyan mb-10">{t("about.title")}</h2>

      <p className="text-2xl whitespace-pre-line">{t("about.description")}</p>

      <br />
      <h6>{t("about.founders")}</h6>
    </div>
  );
};

export default AboutUsText;
