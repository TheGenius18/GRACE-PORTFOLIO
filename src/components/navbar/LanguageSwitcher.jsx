import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const switchLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.dir = i18n.dir(lng);
  };

  return (
    <div className="flex gap-2 ml-3">
      {" "}
      {/* ⬅️ spacing from logo */}
      {["en", "ar"].map((lng) => (
        <button
          key={lng}
          onClick={() => switchLanguage(lng)}
          className={`px-3 py-1 text-sm font-semibold rounded-lg border transition-all duration-300
            ${
              i18n.language === lng
                ? "bg-gradient-to-r from-cyan to-blue-600 text-white shadow-md"
                : "border-cyan text-cyan hover:bg-cyan hover:text-white"
            }
          `}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
