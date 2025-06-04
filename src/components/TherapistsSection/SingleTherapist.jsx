import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleTherapist = ({
  name,
  year,
  align,
  image,
  link,
  description,
  index,
}) => {
  return (
    <motion.div
      variants={fadeIn("top", 0)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="relative"
    >
      {/* ✅ الرقم في الجانب الأيمن */}
      <div
        className={`absolute top-1/2 -translate-y-1/2 text-cyan text-9xl font-bold drop-shadow-[0_0_12px_rgba(34,211,238,0.6)] select-none
    ${align === "left" ? "left-[80px]" : "right-[80px]"}
  `}
      >
        {index + 1}
      </div>

      <div
        className={`
          flex w-full sm:flex-col-reverse items-center gap-8 p-6 rounded-2xl
          bg-[#06182c] shadow-[0_8px_30px_rgba(34,211,238,0.25)]
          hover:shadow-[0_12px_45px_rgba(34,211,238,0.4)] transition-shadow duration-300
          ${
            align === "left" ? "md:flex-row" : "md:flex-row-reverse"
          } justify-end sm:flex-col
        `}
      >
        <div>
          <h2 className="md:text-3xl sm:text-2xl text-white drop-shadow-[0_0_7px_rgba(24,221,228,1)]">
            {name}
          </h2>
          <h2 className="text-xl font-thin text-cyan font-special">{year}</h2>
          <p className="text-white mt-2 max-w-md">{description}</p>
        </div>

        <div className="max-h-[170px] max-w-[170px] overflow-hidden hover:scale-110 transform transition-all duration-500 relative">
          <img
            src={image}
            alt="image"
            className="w-full h-full drop-shadow-[0_0_7px_rgba(104,1,128,1)]
              hover:drop-shadow-[0_0_7px_rgba(34,211,238,.5)]
              transition-all duration-300"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SingleTherapist;
