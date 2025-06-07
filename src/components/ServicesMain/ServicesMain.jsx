// Refactored: ServicesMain.jsx with i18next support
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaClipboardList,
  FaUserMd,
  FaTools,
  FaHeartbeat,
} from "react-icons/fa";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const GraceAppSection = () => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState("test");

  const GraceStepsData = {
    test: {
      title: t("grace.steps.test.title"),
      tagline: t("grace.steps.test.tagline"),
      icon: <FaClipboardList />,
      description: t("grace.steps.test.description"),
      features: [
        {
          title: t("grace.steps.test.features.0.title"),
          items: t("grace.steps.test.features.0.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.test.features.1.title"),
          items: t("grace.steps.test.features.1.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.test.features.2.title"),
          items: t("grace.steps.test.features.2.items", {
            returnObjects: true,
          }),
        },
      ],
    },
    therapist: {
      title: t("grace.steps.therapist.title"),
      tagline: t("grace.steps.therapist.tagline"),
      icon: <FaUserMd />,
      description: t("grace.steps.therapist.description"),
      features: [
        {
          title: t("grace.steps.therapist.features.0.title"),
          items: t("grace.steps.therapist.features.0.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.therapist.features.1.title"),
          items: t("grace.steps.therapist.features.1.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.therapist.features.2.title"),
          items: t("grace.steps.therapist.features.2.items", {
            returnObjects: true,
          }),
        },
      ],
    },
    tools: {
      title: t("grace.steps.tools.title"),
      tagline: t("grace.steps.tools.tagline"),
      icon: <FaTools />,
      description: t("grace.steps.tools.description"),
      features: [
        {
          title: t("grace.steps.tools.features.0.title"),
          items: t("grace.steps.tools.features.0.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.tools.features.1.title"),
          items: t("grace.steps.tools.features.1.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.tools.features.2.title"),
          items: t("grace.steps.tools.features.2.items", {
            returnObjects: true,
          }),
        },
      ],
    },
    healing: {
      title: t("grace.steps.healing.title"),
      tagline: t("grace.steps.healing.tagline"),
      icon: <FaHeartbeat />,
      description: t("grace.steps.healing.description"),
      features: [
        {
          title: t("grace.steps.healing.features.0.title"),
          items: t("grace.steps.healing.features.0.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.healing.features.1.title"),
          items: t("grace.steps.healing.features.1.items", {
            returnObjects: true,
          }),
        },
        {
          title: t("grace.steps.healing.features.2.title"),
          items: t("grace.steps.healing.features.2.items", {
            returnObjects: true,
          }),
        },
      ],
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={fadeIn("down", 0.2)}
          className="text-center my-16"
        >
          <h2 className="text-4xl font-bold text-cyan font-special mb-4">
            {t("grace.title")}
          </h2>
        </motion.div>

        {/* Step Selector */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(GraceStepsData).map((step) => (
            <motion.button
              key={step}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStep(step)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeStep === step
                  ? `bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg`
                  : "bg-gradient-to-r from-[#24025360] to-[#01092357] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-cyan border-opacity-[.4]"
              }`}
            >
              <span className="mr-2">{GraceStepsData[step].icon}</span>
              {GraceStepsData[step].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Step Content */}
        <motion.div
          variants={fadeIn("up", 0.6)}
          className="rounded-2xl shadow-xl overflow-hidden bg-gradient-to-r from-[#24025333] to-[#01092336]"
        >
          <div className="md:flex">
            {/* Text Content */}
            <div className="p-8 md:pr-12">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                variants={fadeIn("right", 0.2)}
                className="flex items-center mb-8"
              >
                <div
                  className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mr-6 bg-gradient-to-r from-cyan-500 to-blue-600`}
                >
                  {GraceStepsData[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[gray] uppercase tracking-wider">
                    {GraceStepsData[activeStep].tagline}
                  </h3>
                  <h2 className="text-3xl font-bold text-cyan mt-1">
                    {GraceStepsData[activeStep].title}
                  </h2>
                </div>
              </motion.div>

              <motion.p
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                variants={fadeIn("right", 0.4)}
                className="text-lg text-white mb-8"
              >
                {GraceStepsData[activeStep].description}
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8">
                {GraceStepsData[activeStep].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.1 }}
                    variants={fadeIn("up", 0.4 + i * 0.2)}
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-cyan border-opacity-[.4] p-5 bg-white bg-opacity-5 backdrop-blur-sm"
                  >
                    <h4 className="text-cyan font-semibold text-lg mb-3">
                      {feature.title}
                    </h4>
                    <ul>
                      {(Array.isArray(feature.items) ? feature.items : []).map(
                        (item, j) => (
                          <motion.li
                            key={j}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ amount: 0.1 }}
                            variants={fadeIn("right", 0.6 + j * 0.1)}
                            className="flex items-start mb-2 last:mb-0"
                          >
                            <span className="inline-block w-2 h-2 rounded-full bg-cyan mt-2 mr-3"></span>
                            <span className="text-gray-600 dark:text-gray-300">
                              {item}
                            </span>
                          </motion.li>
                        )
                      )}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              variants={fadeIn("left", 0.4)}
              className="flex flex-col justify-center p-8"
            >
              <div className="mr-10 rounded-2xl bg-opacity-10 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-9xl text-cyan text-opacity-70"
                >
                  {GraceStepsData[activeStep].icon}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GraceAppSection;
