/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const NavItems = ({ label, adress }) => {
  return (
    <NavLink
      to={adress}
      end
      className={({ isActive }) =>
        `flex justify-center px-4  py-2 my-1 uppercase  transition-colors duration-300 transform hover:bg-[#427d9d6e]  hover:text-white ${
          isActive
            ? "bg-[#007BFF] text-white "
            : "text-black dark:text-gray-500 "
        }`
      }
    >
      <span className="mx-4 font-bold">{label}</span>
    </NavLink>
  );
};

export default NavItems;
