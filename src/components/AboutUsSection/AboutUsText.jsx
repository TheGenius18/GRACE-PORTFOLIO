import { Link } from "react-scroll";

const AboutUsText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Us</h2>
      <p className="text-2xl">
        Grace is more than a platform — it’s a movement for modern healing. Founded by therapists, designers, and engineers, our mission is to make high-quality mental support accessible, intelligent, and deeply personal.Whether you're seeking a diagnosis, professional guidance, or self-paced exercises, Grace is here to walk with you — from your first check-in to long-term recovery.
      </p>
      <button className="border border-cyan rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-darkCyan transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-white transition-all duration-500"
        >
          Our Team
        </Link>
      </button>
    </div>
  );
};

export default AboutUsText;
