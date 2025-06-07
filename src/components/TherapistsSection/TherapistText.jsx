import { useTranslation } from "react-i18next";

const ProjectsText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-center mt-[100px]">
      <h2 className="text-6xl text-cyan mb-10">{t("therapist.title")}</h2>
      <p className="text-3xl text-center text-darkCyan">
        {t("therapist.subtitle")}
      </p>
      <p className="text-lg text-center whitespace-pre-line">
        {t("therapist.description")}
      </p>
    </div>
  );
};

export default ProjectsText;
