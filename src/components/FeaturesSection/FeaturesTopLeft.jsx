import { useTranslation } from "react-i18next";

const FeaturesTopLeft = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-6 md:w-[100vh] sm:[70vh]">
      <p className="text-darkCyan font-bold uppercase text-4xl font-special sm:text-center md:text-left">
        {t("features.topLeft.title")}
      </p>
      <p className="text-white text-xl">{t("features.topLeft.description")}</p>
      <p className="text-cyan uppercase font-bold text-lg">
        {t("features.topLeft.footer")}
      </p>
    </div>
  );
};

export default FeaturesTopLeft;
