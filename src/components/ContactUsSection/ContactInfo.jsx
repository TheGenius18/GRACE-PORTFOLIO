// eslint-disable-next-line no-unused-vars
import { HiOutlineMail } from "react-icons/hi";
// eslint-disable-next-line no-unused-vars
import SingleInfo from "./SingleInfo";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  return (
    <div
      className={`flex flex-col gap-4 ${
        isRTL ? "items-end text-right" : "items-start text-left"
      }`}
    ></div>
  );
};

export default ContactInfo;
