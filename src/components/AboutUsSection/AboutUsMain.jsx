import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import AboutImage from "./AboutUsImage";
import AboutText from "./AboutUsText";

const AboutUsMain = () => {
  return (
    <section
      id="about"
      className="min-h-screen w-full px-4 py-20 flex flex-col md:flex-row-reverse gap-12 items-center justify-between max-w-[1200px] mx-auto"
    >
      {/* About Text (shown above on mobile) */}
      <motion.div
        variants={fadeIn("left", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1 w-full"
      >
        <AboutText />
      </motion.div>

      {/* About Image (shown below on mobile) */}
      <motion.div
        variants={fadeIn("right", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="flex-1 w-full flex justify-center"
      >
        <AboutImage />
      </motion.div>
    </section>
  );
};

export default AboutUsMain;
