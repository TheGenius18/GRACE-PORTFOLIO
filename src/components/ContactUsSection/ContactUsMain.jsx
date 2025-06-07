import ContactusLeft from "./ContactUsLeft";
import ContactusRight from "./ContactUsRight";
import { useTranslation } from "react-i18next";

const ContactMain = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      id="contact"
      className="mt-60 bg-gradient-to-r from-[#24025333] to-[#01092336] max-w-[1200px] mx-auto px-4 p-5 rounded border-cyan border-[0.5px]"
    >
      <h2 className="text-7xl text-cyan mb-10 text-center">
        {t("contact.title")}
      </h2>

      <div
        className={`flex flex-col lg:flex-row gap-12 p-8 items-start justify-between`}
      >
        <div className="w-full lg:w-1/2">
          <ContactusRight />
        </div>
        <div className="w-full lg:w-1/2">
          <ContactusLeft />
        </div>
      </div>
    </div>
  );
};

export default ContactMain;