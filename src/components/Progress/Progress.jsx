import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle, Globe, Bot, Rocket } from "lucide-react";

const iconMap = [Sparkles, CheckCircle, Globe, Bot, Rocket];

const Progress = () => {
  const { t } = useTranslation();
  const steps = t("progress.steps", { returnObjects: true });

  return (
    <section id="progress" className="py-20 px-4 bg-darkBrown">
      <div className="max-w-4xl mx-auto">
        <h2
          className="text-7xl font-bold text-center mb-8"
          style={{ color: "#00FFFF" }}
        >
          {t("progress.title")}
        </h2>
        <p className="text-center text-white/70 mb-14">
          {t("progress.subtitle")}
        </p>

        <div className="relative border-l-2 border-cyan-500 pl-6">
          {steps.map((step, index) => {
            const Icon = iconMap[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="mb-12 ml-4 relative"
              >
                <div className="absolute -left-6 top-1 w-12 h-12 bg-[#07152d] border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-md">
                  <Icon className="text-cyan-400 w-6 h-6" />
                </div>
                <div className="bg-[#0D1A34] rounded-xl shadow-lg px-6 py-5 border border-cyan-700 ">
                  <h3 className="text-lg font-semibold text-white ml-6">
                    {step.title}
                  </h3>
                  <p className="text-sm text-cyan-300 mb-1 ml-7">{step.date}</p>
                  <p className="text-white/90 text-sm ml-7">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Progress;
