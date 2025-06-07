import {
  FaUniversalAccess,
  FaHandHoldingHeart,
  FaRegClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { fadeIn } from "../../framerMotion/variants";

const WhyGraceSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className={`mt-40 py-20 bg-gray-50 dark:bg-gray-800/50 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("down", 0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan font-special mb-4">
            {t("whyGrace.title")}
          </h2>
          <p className="text-xl text-[gray] max-w-3xl mx-auto">
            {t("whyGrace.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="bg-gradient-to-r from-[#24025333] to-[#01092336] grid md:grid-cols-2 gap-12"
        >
          {/* The Need */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="dark:bg-gray-700 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-darkCyan mb-6 flex items-center">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mr-4"
              >
                <FaUniversalAccess className="text-darkCyan" />
              </motion.span>
              {t("whyGrace.theNeed.title")}
            </h3>
            <p className="text-lg text-[#ebd7d7] mb-8">
              {t("whyGrace.theNeed.paragraph")}
            </p>

            <div className="space-y-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeIn("right", 0.4 + i * 0.2)}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 text-darkCyan">
                      {
                        [
                          <FaMoneyBillWave />,
                          <FaRegClock />,
                          <FaHandHoldingHeart />,
                        ][i]
                      }
                    </div>
                  </div>
                  <div className={`ml-4 ${isRTL ? "mr-4 ml-0" : ""}`}>
                    <h4 className="text-lg font-medium text-cyan">
                      {t(`whyGrace.theNeed.points.${i}.title`)}
                    </h4>
                    <p className="text-[#ebd7d7]">
                      {t(`whyGrace.theNeed.points.${i}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* The Solution */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-gradient-to-r from-[#24025352] to-[#0109236e] rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-cyan mb-6 flex items-center">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-teal-100 dark:bg-teal-900/20 p-2 rounded-full mr-4"
              >
                <GiBrain className="text-cyan" />
              </motion.span>
              {t("whyGrace.theSolution.title")}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              {t("whyGrace.theSolution.paragraph")}
            </p>

            <div className="space-y-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  variants={fadeIn("left", 0.4 + i * 0.2)}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/20 text-cyan">
                      {
                        [
                          <FaUniversalAccess />,
                          <FaMoneyBillWave />,
                          <FaHandHoldingHeart />,
                        ][i]
                      }
                    </div>
                  </div>
                  <div className={`ml-4 ${isRTL ? "mr-4 ml-0" : ""}`}>
                    <h4 className="text-lg font-medium text-cyan">
                      {t(`whyGrace.theSolution.points.${i}.title`)}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {t(`whyGrace.theSolution.points.${i}.desc`)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)} className="text-center mt-52">
          <h3 className="text-3xl font-bold text-cyan mb-6">
            {t("whyGrace.cta.title")}
          </h3>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            {t("whyGrace.cta.desc")}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyGraceSection;
