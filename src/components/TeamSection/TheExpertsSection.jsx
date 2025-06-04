import { motion } from "framer-motion";

const experts = [
  {
    name: "Dr. AFAF AL SHALABI",
    role: "AI Researcher",
    contact: "AFAF@company.com",
    img: "/avatars/avatar1.png", // use placeholder or local avatar
  },
  {
    name: "NORA",
    role: "THERAPIST",
    contact: "NORA@company.com",
    img: "/avatars/avatar2.png",
  },
  {
    name: "RAWAN",
    role: "THERAPIST",
    contact: "RAWAN@company.com",
    img: "/avatars/avatar3.png",
  },
  {
    name: "DR.YOUSEF LATIFA",
    role: "THERAPIST",
    contact: "YOUSEF@company.com",
    img: "/avatars/avatar4.png",
  },
  {
    name: "DR.THAER HAIDAR",
    role: "Psychologist",
    contact: "THAER@company.com",
    img: "/avatars/avatar5.png",
  },
  {
    name: "DR.CAROLINE",
    role: "Manager",
    contact: "Caroline@company.com",
    img: "/avatars/avatar6.png",
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
              className="bg-gradient-to-r from-[#24025333] to-[#01092336] border border-darkCyan p-6 rounded-xl hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 text-white"
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
                <p className="text-sm text-cyan-600">{expert.contact}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheExpertsSection;
