/* eslint-disable react/prop-types */
const WorkingExperince = ({ date, title, description }) => {
  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border dark:border-[#5cfaff] border-gray-500 dark:bg-[#5cfaff]" />
      <time className="mb-1 text-lg  leading-none text-black font-semibold dark:text-white">
        {date}
      </time>
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="mb-4 text-lg font-normal text-gray-800 dark:text-gray-400">
        {description}
      </p>
    </li>
  );
};

export default WorkingExperince;
