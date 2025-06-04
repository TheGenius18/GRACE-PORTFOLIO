import {
  FaUniversalAccess,
  FaHandHoldingHeart,
  FaRegClock,
  FaMoneyBillWave,
} from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const WhyGraceSection = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.25 }}
      className="mt-40 py-20 bg-gray-50 dark:bg-gray-800/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeIn("down", 0.2)}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-cyan font-special mb-4">
            Why Grace?
          </h2>
          <p className="text-xl text-[gray] max-w-3xl mx-auto">
            Bridging the gap in mental health care with innovative solutions
          </p>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          className="bg-gradient-to-r from-[#24025333] to-[#01092336] grid md:grid-cols-2 gap-12"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="dark:bg-gray-700 rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-darkCyan mb-6 flex items-center">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-red-100 dark:bg-red-900/20 p-2 rounded-full mr-4"
              >
                <FaUniversalAccess className="text-darkCyan" />
              </motion.span>
              The Need
            </h3>
            <p className="text-lg text-[#ebd7d7] mb-8">
              Depression affects millions worldwide, yet many struggle to access
              proper care due to systemic barriers.
            </p>

            <div className="space-y-6">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("right", 0.4)}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 text-darkCyan">
                    <FaMoneyBillWave className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-cyan">High Costs</h4>
                  <p className="text-[#ebd7d7]">
                    Traditional therapy can be prohibitively expensive, with
                    sessions often costing $100-$200 each.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("right", 0.6)}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 text-darkCyan">
                    <FaRegClock className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-cyan">
                    Limited Availability
                  </h4>
                  <p className="text-[#ebd7d7]">
                    Many areas face therapist shortages, with waitlists
                    stretching months for new patients.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("right", 0.8)}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-red-100 dark:bg-red-900/20 text-darkCyan">
                    <FaHandHoldingHeart className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-cyan">
                    Stigma & Access
                  </h4>
                  <p className="text-[#ebd7d7]">
                    Social stigma and logistical challenges prevent many from
                    seeking the help they need.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="bg-gradient-to-r from-[#24025352] to-[#0109236e] rounded-2xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-cyan mb-6 flex items-center">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="bg-teal-100 dark:bg-teal-900/20 p-2 rounded-full mr-4"
              >
                <GiBrain className="text-cyan" />
              </motion.span>
              The Solution
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Grace provides accessible, affordable, and personalized mental
              health support through innovative technology.
            </p>

            <div className="space-y-6">
              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("left", 0.4)}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/20 text-cyan">
                    <FaUniversalAccess className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-cyan">
                    Always Accessible
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    24/7 AI support with optional professional therapy,
                    available anytime, anywhere.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("left", 0.6)}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/20 text-cyan">
                    <FaMoneyBillWave className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-cyan">
                    Affordable Care
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fraction of the cost of traditional therapy with comparable
                    effectiveness for many cases.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={fadeIn("left", 0.8)}
                className="flex items-start"
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-teal-100 dark:bg-teal-900/20 text-cyan">
                    <FaHandHoldingHeart className="h-4 w-4" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-cyan">Stigma-Free</h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Private, judgment-free support that meets you where you are
                    in your mental health journey.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={fadeIn("up", 0.6)} className="text-center mt-52">
          <h3 className="text-3xl font-bold text-cyan mb-6">
            Start Your Healing Today with Grace{" "}
            <span className="text-green-600">🌿</span>
          </h3>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Take the first step—take the test, choose your path, and let Grace
            guide you toward a happier, healthier mind.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyGraceSection;
