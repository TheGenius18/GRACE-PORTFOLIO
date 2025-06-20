import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const OurVisionSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <section className="py-20 mt-10 mb-10 bg-darkBrown light:bg-light-darkBrown relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="h-[100px] w-[850px] bg-cyan light:bg-light-cyan opacity-[0.05] absolute top-40 right-80 rounded-[20px] z-0" />

      <div
        className={`container mx-auto px-6 md:px-12 lg:px-20 relative z-10 ${
          isRTL ? "text-right" : "text-left"
        }`}
      >
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-5xl font-bold text-center text-6xl text-cyan light:text-light-cyan mb-10"
        >
          {t("vision.title")}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg text-center max-w-3xl mx-auto text-white light:text-black"
        >
          {t("vision.text")}
        </motion.p>
      </div>
    </section>
  );
};

export default OurVisionSection;
