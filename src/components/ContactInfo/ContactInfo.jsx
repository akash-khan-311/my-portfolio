/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ContactInfo = ({ title, subTitle, icon: Icon }) => {
  return (
    <div className="flex flex-row   items-center gap-x-5 bg-[#E4E4E4] dark:bg-[#191D2B] py-16 pl-10   min-w-[100px] ml-0 lg:ml-5">
      <div className="p-4 md:p-6 lg:p-7 border border-gray-500 dark:border-gray-400">
        <Icon className="text-gray-800 dark:text-gray-400 text-xl md:text-2xl lg:text-3xl" />
      </div>
      <div className="overflow-hidden  text-left">
        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-black dark:text-gray-400">
          {title}
        </h4>
        <p className="text-sm md:text-lg lg:text-xl   text-black dark:text-gray-400">
          {" "}
          {subTitle}{" "}
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
