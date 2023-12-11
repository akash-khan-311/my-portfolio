/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItems = ({ label, address, handleToggle }) => {
  return (
    <NavLink
      to={address}
      end
      onClick={handleToggle}
      className={({ isActive }) =>
        `flex justify-center px-4  py-2 my-1 uppercase  transition-colors duration-300 transform hover:bg-[#f3155852]  hover:text-white ${
          isActive
            ? "bg-[#F31559] text-white "
            : "text-black dark:text-gray-500 "
        }`
      }
    >
      <span className="mx-4 font-bold">{label}</span>
    </NavLink>
  );
};

export default NavItems;
