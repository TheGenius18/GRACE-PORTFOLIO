import SingleContactSocial from "./SingleContactSocial";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="#" Icon={FaYoutube} />
      <SingleContactSocial link="#" Icon={FaFacebook} />
      <SingleContactSocial link="#" Icon={FaTwitter} />
    </div>
  );
};

export default ContactSocial;
