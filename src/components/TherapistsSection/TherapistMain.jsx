import TherapistText from "./TherapistText";
import SingleTherapist from "./SingleTherapist";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const features = [
  {
    name: "Your Virtual Office",
    year: "All-in-One Practice Management",
    align: "right",
    image: "/images/knowledge.png",
    description:
      "Patient records, schedules and communications unified in one HIPAA-compliant hub with smart scheduling and automated reminders",
  },
  {
    name: "Your Clinical Assistant",
    year: "AI-Powered Clinical Tools",
    align: "left",
    image: "/images/artificial-intelligence.png",
    description: "AI symptom pattern detection, DSM-5 diagnostic references",
  },
  {
    name: "Your Educational Studio",
    year: "Client Engagement Platform",
    align: "right",
    image: "/images/interaction.png",
    description:
      "Evergreen content library, engagement analytics, and moderated community spaces",
  },
  {
    name: "Your Outcomes Lab",
    year: "Progress Tracking & Reporting",
    align: "left",
    image: "/images/base.png",
    description:
      "Visual progress tracking, automated outcome measurement, and exportable reports",
  },
];

const featuresMain = () => {
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
        {features.map((project, index) => {
          return (
            <SingleTherapist
              key={index}
              index={index}
              name={project.name}
              year={project.year}
              align={project.align}
              image={project.image}
              description={project.description}
            />
          );
        })}
      </div>
    </div>
  );
};

export default featuresMain;
