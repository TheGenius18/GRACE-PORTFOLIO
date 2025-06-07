import { useTranslation } from "react-i18next";

const FeaturesText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-[100px] ">
      <h2 className="md:text-6xl sm:text-5xl text-cyan mb-10">
        {t("features.our")}
      </h2>
    </div>
  );
};

export default FeaturesText;
