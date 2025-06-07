import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const HeroText = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-4xl sm:text-2xl text-lightGrey"
      >
        {t("hero.subtitle")}
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-5xl sm:text-3xl text-lightCyan font-bold uppercase"
      >
        {t("hero.title")} <br className="sm:hidden md:block" />
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-2 lg:text-4xl sm:text-2xl"
      >
        {t("hero.description")}
      </motion.p>
    </div>
  );
};

export default HeroText;
