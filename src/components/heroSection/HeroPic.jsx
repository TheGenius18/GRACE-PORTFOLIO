import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiCircleDashedDuotone } from "react-icons/pi";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center relative"
    >
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400 via-purple-500 to-orange-400 rounded-full mix-blend-multiply opacity-70 group-hover:opacity-90 transition-opacity duration-500 blur-[20px] animate-[pulse_6s_ease-in-out_infinite]"></div>
        <img
          src="/images/9.png"
          alt="GRACE"
          className="max-h-[450px] w-auto relative z-10 drop-shadow-[0_0_15px_rgba(0,170,200,0.9)] group-hover:drop-shadow-[0_0_25px_rgba(0,170,240,1)] transition-all duration-500"
        />
      </div>
      <div className="absolute -z-10 flex justify-center items-center">
        <PiCircleDashedDuotone className="md:h-[90%] sm:h-[120%] min-h-[600px] opacity-[0.2] w-auto text-cyan  blur-xl animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
