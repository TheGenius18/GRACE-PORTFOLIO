import { HiOutlineMail } from "react-icons/hi";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4">
      <SingleInfo text="Grace@gmail.com" Image={HiOutlineMail} />
    </div>
  );
};

export default ContactInfo;
