import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaUserMd, FaTools, FaHeartbeat } from 'react-icons/fa';
import { fadeIn } from '../../framerMotion/variants';

const GraceAppSection = () => {
  const [activeStep, setActiveStep] = useState('test');

  const GraceStepsData = {
    test: {
      title: "Depression Test",
      tagline: "First Step to Understanding",
      icon: <FaClipboardList />,
      description: "Grace uses the scientifically validated Beck Depression Inventory (BDI) to help you understand your current emotional state through either an AI conversation or structured questionnaire.",
      features: [
        {
          title: "Assessment Options",
          items: [
            "AI Chat Diagnosis - Conversational evaluation",
            "Form-Based Diagnosis - Structured questionnaire",
          ]
        },
        {
          title: "What You'll Get",
          items: [
            "Personalized depression level insights",
            "Thought reflection guidance",
            "Clear starting point for treatment"
          ]
        },
        {
          title: "Why It Matters",
          items: [
            "Establishes your baseline",
            "Helps tailor your therapy plan",
            "Provides objective measurement"
          ]
        }
      ]
    },
    therapist: {
      title: "Begain with Therapist",
      tagline: "Personalized Care Journey",
      icon: <FaUserMd />,
      description: "Grace connects you with the right professional support, whether through human therapists or our AI-guided therapy system, to begin your personalized treatment plan.",
      features: [
        {
          title: "how it works",
          items: [
            "choose your perfect match therapist",
            "choose your sessions time",
            "start your therapy journey"
          ]
        },
        {
          title: "Treatment Features",
          items: [
            "Tailored treatment plans",
            "Continuous chat support",
            "Scheduled sessions"
          ]
        },
        {
          title: "Progress Tracking",
          items: [
            "Regular check-ins",
            "Visual progress charts",
            "Adjustable treatment intensity"
          ]
        }
      ]
    },
    tools: {
      title: "Therapeutic Tools",
      tagline: "Science-Backed Techniques",
      icon: <FaTools />,
      description: "Access a comprehensive toolkit of therapeutic exercises designed to help you manage depression through various evidence-based approaches.",
      features: [
        {
          title: "Therapy Tools",
          items: [
            "diary & pattern tracking",
            "Problem solving frameworks",
            "Social role playing"
          ]
        },
        {
          title: "Self-Care Practices",
          items: [
            "Mindfulness meditation",
            "Breathing techniques",
            "Muscle relaxation"
          ]
        },
        {
          title: "Behavioral Tools",
          items: [
            "Cognitive reframing",
            "Emotion regulation",
            "Goal setting systems"
          ]
        }
      ]
    },
    healing: {
      title: "Healing & Growth",
      tagline: "Your Wellness Journey",
      icon: <FaHeartbeat />,
      description: "Grace supports your long-term mental wellness with strategies to maintain progress and build resilience against future challenges.",
      features: [
        {
          title: "Progress Recognition",
          items: [
            "Mood improvement tracking",
            "Mindset shift awareness",
            "Behavioral change metrics"
          ]
        },
        {
          title: "Resilience Building",
          items: [
            "Setback prevention plans",
            "Coping strategy development",
            "Stress management techniques"
          ]
        },
        {
          title: "Maintenance",
          items: [
            "Long-term wellness strategies",
            "Relapse prevention",
            "Community support options"
          ]
        }
      ]
    }
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="show"
      viewport={{ amount: 0.2 }}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          variants={fadeIn("down", 0.2)}
          className="text-center my-16"
        >
          <h2 className="text-4xl font-bold text-cyan font-special mb-4">
            Grace's Healing Pathway
          </h2>
        </motion.div>

        {/* Step Selector */}
        <motion.div 
          variants={fadeIn("up", 0.4)}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(GraceStepsData).map((step) => (
            <motion.button
              key={step}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveStep(step)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center ${
                activeStep === step
                  ? `bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg`
                  : 'bg-gradient-to-r from-[#24025360] to-[#01092357] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-cyan border-opacity-[.4]'
              }`}
            >
              <span className="mr-2">{GraceStepsData[step].icon}</span>
              {GraceStepsData[step].title}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Step Content */}
        <motion.div 
          variants={fadeIn("up", 0.6)}
          className="rounded-2xl shadow-xl overflow-hidden bg-gradient-to-r from-[#24025333] to-[#01092336]"
        >
          <div className="md:flex">
            {/* Text Content */}
            <div className="p-8 md:pr-12">
              <motion.div 
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                variants={fadeIn("right", 0.2)}
                className="flex items-center mb-8"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl mr-6 bg-gradient-to-r from-cyan-500 to-blue-600`}>
                  {GraceStepsData[activeStep].icon}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[gray] uppercase tracking-wider">
                    {GraceStepsData[activeStep].tagline}
                  </h3>
                  <h2 className="text-3xl font-bold text-cyan mt-1">
                    {GraceStepsData[activeStep].title}
                  </h2>
                </div>
              </motion.div>

              <motion.p 
                initial="hidden"
                whileInView="show"
                viewport={{ amount: 0.1 }}
                variants={fadeIn("right", 0.4)}
                className="text-lg text-white mb-8"
              >
                {GraceStepsData[activeStep].description}
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8">
                {GraceStepsData[activeStep].features.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ amount: 0.1 }}
                    variants={fadeIn("up", 0.4 + i * 0.2)}
                    whileHover={{ y: -5 }}
                    className="rounded-lg border border-cyan border-opacity-[.4] p-5 bg-white bg-opacity-5 backdrop-blur-sm"
                  >
                    <h4 className="text-cyan font-semibold text-lg mb-3">
                      {feature.title}
                    </h4>
                    <ul className="">
                      {feature.items.map((item, j) => (
                        <motion.li 
                          key={j}
                          initial="hidden"
                          whileInView="show"
                          viewport={{ amount: 0.1 }}
                          variants={fadeIn("right", 0.6 + j * 0.1)}
                          className="flex items-start mb-2 last:mb-0"
                        >
                          <span className="inline-block w-2 h-2 rounded-full bg-cyan mt-2 mr-3"></span>
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Visual Content */}
            <motion.div 
              initial="hidden"
              whileInView="show"
              viewport={{ amount: 0.1 }}
              variants={fadeIn("left", 0.4)}
              className="flex flex-col justify-center p-8"
            >
              <div className="mr-10 rounded-2xl bg-opacity-10 flex items-center justify-center">
                <motion.div 
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-9xl text-cyan text-opacity-70"
                >
                  {GraceStepsData[activeStep].icon}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GraceAppSection;