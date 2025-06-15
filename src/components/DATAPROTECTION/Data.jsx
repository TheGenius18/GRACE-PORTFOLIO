import React from "react";
import { useTranslation } from "react-i18next";
import { ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const Data = () => {
  const { t } = useTranslation();

  return (
    <section id="data" className="py-20 px-6 bg-darkBrown">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <ShieldCheck className="w-14 h-14 text-cyan-400" />
          </div>
          <h2 className="text-6xl font-bold mb-4" style={{ color: "#00FFFF" }}>
            {t("data.title")}
          </h2>
          <p className="text-white text-opacity-90 leading-relaxed text-lg max-w-3xl mx-auto">
            {t("data.paragraph")}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Data;
