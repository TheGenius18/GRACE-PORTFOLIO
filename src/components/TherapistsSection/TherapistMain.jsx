import TherapistText from "./TherapistText";
import SingleTherapist from "./SingleTherapist";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const FeaturesMain = () => {
  const { t } = useTranslation();

  const featureKeys = [
    "virtualOffice",
    "clinicalAssistant",
    "educationStudio",
    "outcomesLab",
  ];

  const imageMap = {
    virtualOffice: "images/knowledge.png", // closest match
    clinicalAssistant: "/images/artificial-intelligence.png",
    educationStudio: "/images/interaction.png",
    outcomesLab: "/images/base.png",
  };

  return (
    <div id="therapist" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <TherapistText />
      </motion.div>

      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {featureKeys.map((key, index) => (
          <SingleTherapist
            key={key}
            index={index}
            nameKey={`therapist.features.${key}.name`}
            yearKey={`therapist.features.${key}.year`}
            descKey={`therapist.features.${key}.description`}
            image={imageMap[key]}
            align={index % 2 === 0 ? "right" : "left"}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturesMain;
