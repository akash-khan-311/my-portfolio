import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import NavItems from "../../../components/NavItems/NavItems";

import myPhoto from "../../../assets/Images/myPhoto.png";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Menu */}
      <div className="menu ">
        <button
          className="mobile-menu-button p-4 focus:outline-none text-[#F31559] fixed top-0 right-5"
          onClick={handleToggle}
        >
          <GiHamburgerMenu className="h-10 w-10" />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`z-10 fixed  flex flex-col justify-between overflow-x-hidden overflow-y-hidden w-72 space-y-6 px-2 py-4  border-r border-r-pink-500  inset-y-0 left-0 transform bg-white dark:bg-[#191D2B] ${
          isActive && "-translate-x-full"
        }  xl:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div className="w-full flex px-4 py-5  justify-center items-center bg-rose-100 mx-auto border-b border-b-pink-500  dark:border-[#F31559]">
            <img
              src={myPhoto}
              className="rounded-full   p-1 h-48 w-48"
              alt=""
            />
          </div>
          {/* <hr className="" /> */}
        </div>

        {/* Nav Items */}

        <div className="flex flex-col  ">
          <nav className="text-center  ">
            <NavItems handleToggle={handleToggle} label={"Home"} address={"/"} />
            <NavItems
              handleToggle={handleToggle}
              label={"About"}
              address={"/about"}
            />
            <NavItems
              handleToggle={handleToggle}
              label={"My Skills"}
              address={"/skills"}
            />
            <NavItems
              handleToggle={handleToggle}
              label={"Projects"}
              address={"/projects"}
            />
            <NavItems
              handleToggle={handleToggle}
              label={"Blogs"}
              address={"/blogs"}
            />
            <NavItems
              handleToggle={handleToggle}
              label={"contact"}
              address={"/contact"}
            />
          </nav>
        </div>
        <div>
          
          <p className="text-black dark:text-white text-center py-3 flex justify-center items-center border-t border-t-pink-500">
            © 2023 | <b>  Akash Ali</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
