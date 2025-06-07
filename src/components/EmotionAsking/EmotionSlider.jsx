import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const EmotionSlider = ({ emotionLevel, handleEmotionChange }) => {
  const { t } = useTranslation();

  return (
    <div className="w-full max-w-md mb-8">
      <motion.label
        htmlFor="emotion-range"
        className="block text-lg font-medium text-gray-700 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {t("emotion.current")}: {emotionLevel}%
      </motion.label>

      <input
        type="range"
        id="emotion-range"
        min="0"
        max="100"
        value={emotionLevel}
        onChange={(e) => handleEmotionChange(parseInt(e.target.value))}
        className="w-full h-2 bg-cyan rounded-full appearance-none cursor-pointer"
      />

      <div className="flex justify-between text-sm text-gray-600 mt-3">
        <span>{t("emotion.sad")}</span>
        <span>{t("emotion.neutral")}</span>
        <span>{t("emotion.happy")}</span>
      </div>
    </div>
  );
};

export default EmotionSlider;
