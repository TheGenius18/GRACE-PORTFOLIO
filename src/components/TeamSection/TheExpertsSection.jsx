import { motion } from "framer-motion";

const experts = [
  {
    name: "Prof. Dr. Caroline Schmitt",
    role: "Professorship for Ecosocial Work and Care",
    contact: "caroline.schmitt@fra-uas.de",
    img: "/images/caro.png",
  },

  {
    name: "Dr. Nora",
    role: "Psychotherapist",
    contact: "",
    img: "/images/female.png",
  },
  {
    name: "Prof. Dr. Afaf ALSHALABI",
    role: "Dean of the Faculty of IE & AI Researcher",
    contact: "alshalaby.afaf@gmail.com",
    img: "/images/afaf.png", // use placeholder or local avatar
  },

  {
    name: "Prof. Dr. Youssef Latifeh",
    role: "Professor in Psychiatry",
    contact: "Youssef.Latifeh@damascusuniversity.edu.sy",
    img: "/images/yousef.png",
  },
  {
    name: "Prof. Dr. Thayr Haydar",
    role: "Psychiatrist",
    contact: "Thayrhaydarh@gmail.com",
    img: "/images/Thaer.png",
  },
  {
    name: "Dr. Rawan Zair",
    role: "Psychotherapist",
    contact: "rawanalzeaeer@gmail.com",
    img: "/images/female.png",
  },
];

const TheExpertsSection = () => {
  return (
    <section className="mt-40 py-20 px-6 bg-darkBrown mt-10 mb-10">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center text-lightCyan mb-12"
        >
          THE EXPERTS
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {experts.map((expert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-r from-[#24025333] to-[#01092336] border border-darkCyan p-6  rounded-xl hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 text-white"
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={expert.img}
                  //   alt={expert.name}
                  className="w-24 h-24 rounded-full mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-700 mb-1">
                  {expert.name}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{expert.role}</p>
                <p className="text-sm text-cyan-600 break-words text-center max-w-[90%] mx-auto">
                  {expert.contact}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheExpertsSection;
