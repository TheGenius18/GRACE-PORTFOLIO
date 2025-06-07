//import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AllFeatures from "./AllFeatures";
import OurFeatures from "./OurFeatures";
import FeaturesTop from "./FeaturesTop";

const FeaturesMain = () => {
  //const { t } = useTranslation(); // Prepared for future localization use

  return (
    <div id="features" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <OurFeatures />
      </motion.div>

      <motion.div
        variants={fadeIn("down", 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <FeaturesTop />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <div className="w-full h-1 mt-4 bg-darkCyan lg:block sm:hidden my-[50px]"></div>
        <AllFeatures />
      </motion.div>
    </div>
  );
};

export default FeaturesMain;
