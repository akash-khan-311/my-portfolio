import PageTitle from "../../../components/PageTitle/PageTitle";
import myPhoto from "../../../assets/Images/myPhoto.jpg";
import MyBtn from "../../../components/MyBtn/MyBtn";
import { useEffect, useState } from "react";
import ServiceCard from "../../../components/ServiceCard/ServiceCard";

const About = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <section>
        <PageTitle title={"About me"} />
        <div className="min-h-screen flex justify-center items-center">
          <div className="text-gray-600 body-font">
            <div className="  flex  py-10 lg:flex-row flex-col items-start">
              <div className="md:w-full lg:w-1/2 w-full mb-10 lg:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="Akash Khan"
                  src={myPhoto}
                />
              </div>
              <div className="lg:flex-grow lg:flex-1 w-full  lg:pl-5 pl-0 flex flex-col lg:items-start lg:text-left items-center text-center">
                <h1 className="text-4xl text-black dark:text-white">
                  I am <span className="text-[#007BFF]">Akash Khan</span>
                </h1>
                <p className="mb-8 leading-relaxed text-gray-800 dark:text-white text-sm lg:text-lg">
                  {`I believe in the power of technology to make a positive impact
                on people's lives. Each line of code I write is fueled by a
                desire to create solutions that are not just functional but also
                intuitive and delightful for users.`}
                </p>
                <div className="flex justify-center items-center text-gray-800 dark:text-[#A4ACC4]">
                  <div className="info-title font-semibold  pr-10 md:text-xl space-y-3 text-left">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Nationality</p>
                    <p>Language</p>
                    <p>Location</p>
                  </div>
                  <div className="info md:text-xl space-y-3 text-left">
                    <p>: Md Akash Khan</p>
                    <p>: 23</p>
                    <p>: Bangladeshi</p>
                    <p>: Bengali, English</p>
                    <p>: Dhaka, Bangladesh</p>
                  </div>
                </div>
                <div className="mt-5">
                  <MyBtn
                    adress={
                      "https://drive.google.com/u/0/uc?id=1pp_yaZWTGE5D64XM1_HmdJeJ867LUHAc&export=download"
                    }
                    text={"download resume"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Services */}
      <section>
        <PageTitle title={"services"} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-32 ">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
