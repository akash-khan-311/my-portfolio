import Sidebar from "../Pages/Home/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import "./Toogle.css";
import { FaGear } from "react-icons/fa6";
import { useEffect, useState } from "react";

const Root = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("class", localTheme);
  }, [theme]);

  const handleSwitchTheme = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };



  return (
    <div className="relative min-h-screen md:flex">
      {/* Sidebar */}
      <Sidebar />
      {/*  */}
      <div className="flex-1 xl:ml-64 bg-[#e9e9fc] dark:bg-[#10121A]  duration-300 overflow-x-hidden overflow-y-hidden">
        <div className=" container mx-auto  xl:p-20 lg:p-10 md:p-8 p-5  ">
          <Outlet />
        </div>
      </div>
      <div className="fixed right-0 top-1/3">
        <div className="flex items-center bg-[#f3155852] dark:bg-[#f3155852] absolute top-32 right-0 overflow-hidden px-5 py-2 rounded-md ">
          <FaGear className="text-2xl text-blue-gray-800 dark:text-white mr-3  animate-spin" />
          <div>
            <label className="switch ">
              <span className="sun">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <g fill="#ffd43b">
                    <circle r={5} cy={12} cx={12} />
                    <path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z" />
                  </g>
                </svg>
              </span>
              <span className="moon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
                </svg>
              </span>
              <input
                type="checkbox"
                checked={theme === "light" ? false : true}
                onChange={handleSwitchTheme}
                className="input"
              />
              <span className="slider" />
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Root;
