import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { FaBrain, FaUserMd, FaHeartbeat } from "react-icons/fa";

const FeatureCard = ({ feature, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const getIcon = () => {
    const iconClass = `fade-in text-8xl bg-clip-text text-transparent ${isExpanded ? `text-darkCyan drop-shadow-[0_0_5px_rgba(174,11,208,1)]
          hover:drop-shadow-[0_0_10px_rgba(34,211,238,1)]
          transition-all duration-300` : `text-white drop-shadow-[0_0_5px_rgba(34,211,238,1)]
          hover:drop-shadow-[0_0_10px_rgba(34,211,238,1)]
          transition-all duration-300`}`;
    
    switch(feature.iconName) {
      case "brain":
        return <FaBrain className={iconClass} />;
      case "userMd":
        return <FaUserMd className={iconClass} />;
      case "heartbeat":
        return <FaHeartbeat className={iconClass} />;
      default:
        return <FaBrain className={iconClass} />;
    }
  };

  return (
    
    <motion.div
      variants={fadeIn("up", index * 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.5 }}
      onClick={() => setIsExpanded(!isExpanded)}
      className={`w-full sm:w-[300px] rounded-xl bg-darkBlue p-6 cursor-pointer transition-all duration-300 
        ${isExpanded ? "h-auto min-h-[440px]" : "h-[440px]"} 
        bg-gradient-to-r from-[#24025333] to-[#01092336] border-2 border-cyan/30 hover:border-cyan/70 shadow-lg hover:shadow-cyan/20`}
    >
      <div className={`flex flex-col h-full ${isExpanded ? "justify-start" : "justify-between"}`}>
        <motion.div
          animate={{
            scale: isExpanded ? 0.8 : 1,
            marginBottom: isExpanded ? "0.5rem" : "1.5rem"
          }}
          transition={{ duration: 0.3 }}
          className={`${isExpanded ? "text-3xl" : "text-4xl"} self-center`}
        >
          {getIcon()}
        </motion.div>
        
        {!isExpanded && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: isExpanded ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="text-center"
          >
            <h3 className="text-cyan text-xl font-bold mb-4">{feature.title}</h3>
            <p className="text-lightGrey">{feature.summary}</p>
          </motion.div>
        )}
        
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-2"
          >
            <ul className="space-y-3 text-lightGrey">
              {feature.details.map((detail, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-cyan mr-2">•</span>
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        <motion.div
          layout
          className={`mt-4 text-cyan font-semibold text-sm ${isExpanded ? "self-end" : "self-center"}`}
        >
          {isExpanded ? "See Less ↑" : "See More ↓"}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FeatureCard;