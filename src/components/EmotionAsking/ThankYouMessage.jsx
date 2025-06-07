import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const ThankYouMessage = ({
  emotionLevel,
  feelingDescription,
  setFeelingDescription,
}) => {
  const { t } = useTranslation();
  const [submitted, setSubmitted] = useState(false);
  const [submittedText, setSubmittedText] = useState("");

  const handleSubmit = () => {
    setSubmittedText(feelingDescription);
    setSubmitted(true);
  };

  return (
    <motion.div className="mt-6 p-6 bg-gradient-to-r from-[#24025333] to-[#01092336] bg-opacity-10 rounded-xl shadow-md border border-[#1a6864]">
      <h3 className="text-2xl font-bold text-[cyan] mb-4">
        {t("emotion.thankYou")}
      </h3>
      <p className="text-[#ffffff] mb-4">
        {t("emotion.yourFeeling")}:{" "}
        {emotionLevel < 40
          ? "😔 " + t("emotion.sad")
          : emotionLevel < 60
          ? "😐 " + t("emotion.neutral")
          : "😊 " + t("emotion.happy")}{" "}
        ({emotionLevel}%)
      </p>

      {!submitted ? (
        <div className="space-y-4">
          <div>
            <label
              htmlFor="feeling-description"
              className="block text-sm font-medium text-[#00ffd9] mb-1"
            >
              {t("emotion.reason")}
            </label>
            <input
              type="text"
              id="feeling-description"
              value={feelingDescription}
              onChange={(e) => setFeelingDescription(e.target.value)}
              className="w-full px-4 py-2 bg-cyan bg-opacity-10 border border-[#006e89] rounded-lg"
              placeholder={t("emotion.placeholder")}
            />
          </div>

          <button
            className="px-6 py-2 border border-[darkCyan] text-[cyan] font-medium rounded-lg"
            onClick={handleSubmit}
          >
            {t("emotion.submitReflection")}
          </button>
        </div>
      ) : (
        <motion.div className="p-4 bg-[#ffffff08] rounded-lg border border-[#1a686433]">
          <p className="text-[#ffffff]">
            <span className="font-medium text-[#00ffd9]">
              {t("emotion.yourReflection")}:
            </span>{" "}
            {submittedText}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ThankYouMessage;
