import { Link } from "react-router-dom";
import { LuArrowDownRight } from "react-icons/lu";

const NavbarEmergencyBtn = () => {
  return (
    <div>
      <Link to="/Emergency" className="
        px-4 py-2 
        rounded-full 
        sm:font-medium sm:text-sm 
        md:text-xl font-bold font-body 
        text-white 
        border-none 
        flex items-center gap-1 
        bg-gradient-to-r from-[rgb(112,27,27)] to-[rgb(51,3,3)] 
        transition-all duration-300 
        cursor-pointer 
        hover:scale-110 
        shadow-[0_0_10px_rgba(255,85,85,0.5)] 
        hover:shadow-[0_0_20px_rgba(255,85,85,0.8)]
        relative 
        overflow-hidden
      ">
        Emergency
      </Link>
    </div>
  );
};

export default NavbarEmergencyBtn;