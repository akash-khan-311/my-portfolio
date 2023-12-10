/* eslint-disable react/prop-types */
// import { Progress } from "@material-tailwind/react";
import "./PageTitle.css";

const PageTitle = ({ title }) => {
  return (
    <div
      data-aos="flip-down"
      data-aos-delay="0"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      className="max-w-5xl mx-auto "
    >
      <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase text-black dark:text-white font-bold title relative">
        {title}
        {/* <Progress
          className="w-32 mt-2 md:mt-3 lg:mt-5 md:w-40 lg:w-52 xl:w-64 h-1 text-gray-500"
          value={60}
          color="blue"
        /> */}
      </h1>
    </div>
  );
};

export default PageTitle;
