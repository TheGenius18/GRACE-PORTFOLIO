import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <div className="  shadow-cyanMediumShadow absolute top-[94%] left-[22%] z-10 opacity-50"></div>
      <img src="/images/1.png" alt="contact image" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactRight;
