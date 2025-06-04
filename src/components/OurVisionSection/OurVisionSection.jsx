import { motion } from "framer-motion";

const OurVisionSection = () => {
  return (
    <section className="py-20 mt-10 mb-10 bg-darkBrown light:bg-light-darkBrown relative overflow-hidden">
      {/* Decorative background shape */}
      <div className="h-[100px] w-[850px] bg-cyan light:bg-light-cyan opacity-[0.05] absolute top-40 right-80 rounded-[20px] z-0" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:text-5xl font-bold text-center text-6xl text-cyan light:text-light-cyan mb-10"
        >
          OUR VISION
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-lg text-center max-w-3xl mx-auto text-white light:text-black"
        >
          Our vision is to create a meaningful space where creativity, healing,
          and human connection thrive. We believe in designing digital
          experiences that empower individuals and inspire positive
          transformation in both personal and professional lives.
        </motion.p>
      </div>
    </section>
  );
};

export default OurVisionSection;
