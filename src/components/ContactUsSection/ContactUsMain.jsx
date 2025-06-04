import ContactusLeft from "./ContactUsLeft";
import ContactusRight from "./ContactUsRight";

const ContactMain = () => {
  return (
    <div
      id="contact"
      className="mt-60 bg-gradient-to-r from-[#24025333] to-[#01092336] max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4 p-5 rounded-r rounded-l border-cyan border-[0.5px] "
    >
      <h2 className="text-7xl text-cyan mb-10 text-center">CONTACT US</h2>
      <div className="flex justify-between gap-24  p-8 rounded-2xl lg:flex-row sm:flex-col">
        <ContactusRight />
        <ContactusLeft />
      </div>
    </div>
  );
};

export default ContactMain;
