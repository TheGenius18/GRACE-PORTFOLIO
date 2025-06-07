import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import FeatureCard from "./FeatureCard";

const FeaturesContainer = () => {
  const { t } = useTranslation();

  const features = ["aiScreening", "therapyJourney", "wellBeingToolkit"].map(
    (key) => ({
      title: t(`features.${key}.title`),
      summary: t(`features.${key}.summary`),
      details: t(`features.${key}.details`, { returnObjects: true }), // expecting an array in translation file
      iconName: t(`features.${key}.icon`) || key, // fallback to key if icon not translated
    })
  );

  return (
    <div className="flex flex-wrap justify-center gap-8 px-4 py-8 ">
      {features.map((feature, index) => (
        <FeatureCard key={index} feature={feature} index={index} />
      ))}
    </div>
  );
};

export default FeaturesContainer;
