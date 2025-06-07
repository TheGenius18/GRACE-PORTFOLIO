import { useTranslation } from "react-i18next";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";

const ContactRight = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      className={`flex flex-col items-center lg:items-start justify-center gap-12 ${
        isRTL ? "text-right" : "text-left"
      }`}
    >
      <div className="shadow-cyanMediumShadow absolute top-[94%] left-[22%] z-10 opacity-50"></div>
      <img
        src="/images/1.png"
        alt="contact image"
        className="max-w-[300px] min-w-[200px] mx-auto"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactRight;