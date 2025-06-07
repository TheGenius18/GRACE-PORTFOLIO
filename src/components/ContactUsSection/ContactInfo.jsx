import { HiOutlineMail } from "react-icons/hi";
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
    >
      <SingleInfo text="tarek4gamez@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="mohammed.zair.job@gmail.com" Image={HiOutlineMail} />
    </div>
  );
};

export default ContactInfo;
