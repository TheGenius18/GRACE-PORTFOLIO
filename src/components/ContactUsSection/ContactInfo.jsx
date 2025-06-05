import { HiOutlineMail } from "react-icons/hi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="tarek4gamez@gmail.com" Image={HiOutlineMail} />
      <SingleInfo text="mohammed.zair.job@gmail.com" Image={HiOutlineMail} />
    </div>
  );
};

export default ContactInfo;
