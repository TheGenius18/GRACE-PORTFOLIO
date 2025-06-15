import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const AboutUsText = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  // Force layout reflow in case translation loads async
  useEffect(() => {
    window.dispatchEvent(new Event("resize"));
  }, []);

  return (
    <div
      className={`flex flex-col overflow-visible ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-cyan light:text-light-cyan mb-8 text-center md:text-start">
        {t("about.title")}
      </h2>

      <div className="text-white text-sm sm:text-base leading-relaxed space-y-4 px-1 sm:px-0">
        <p className="whitespace-pre-line">{t("about.description")}</p>
        <h6 className="text-cyan-300 font-medium">{t("about.founders")}</h6>
      </div>
    </div>
  );
};

export default AboutUsText;
