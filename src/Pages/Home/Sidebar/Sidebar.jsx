import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import NavItems from "../../../components/ParticlesBg/NavItems/NavItems";
import myPhoto from "../../../assets/Images/myPhoto.jpg";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(true);

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Menu */}
      <div className=" flex justify-end md:hidden bg-white dark:bg-[#10121A]">
        <button
          className=" p-4 focus:outline-none text-[#427D9D]"
          onClick={handleToggle}
        >
          <AiOutlineBars className="h-10 w-10" />
        </button>
      </div>

      {/* sidebar */}
      <div
        className={`z-10 sm:fixed  flex flex-col justify-between overflow-x-hidden overflow-y-hidden w-72 space-y-6 px-2 py-4 absolute border-r inset-y-0 left-0 transform bg-[#E4E4E4] dark:bg-[#191D2B] ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out ${!isActive}`}
      >
        <div>
          <div className="w-full flex px-4 py-5  justify-center items-center bg-rose-100 mx-auto border-b border-gray-600 dark:border-[#5cfaff]">
            <img
              src={myPhoto}
              className="rounded-full  p-2 bg-gray-400 dark:bg-[#5cfaff]"
              alt=""
            />
          </div>
          {/* <hr className="" /> */}
        </div>

        {/* Nav Items */}

        <div className="flex flex-col   mt-6 ">
          <nav className="text-center  ">
            <NavItems label={"Home"} adress={"/"} />
            <NavItems label={"About"} adress={"/about"} />
            <NavItems label={"resume"} adress={"/resume"} />
            <NavItems label={"Blogs"} adress={"/blogs"} />
            <NavItems label={"Contact"} adress={"/Contact"} />
          </nav>
        </div>
        <div>
          <hr />
          <p className="text-black dark:text-white text-center py-3 flex justify-center items-center">
            © 2021 | <b> Akash Khan</b>
          </p>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
