import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import WorkingExperince from "../../components/WorkingExperince/WorkingExperince";

const Resume = () => {
  return (
    <div>
      <Helmet>
        <title>Akash Ali | My Skills</title>
      </Helmet>
      {/* Skills Section */}
      <section>
        <PageTitle title={"my skills"} />
        <div className="mt-32 lg:px-20 md:px-10 sm:px-5 px-0 space-y-5">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 space-y-5 lg:space-y-0">
            {/* Html */}
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-1  font-medium dark:text-white uppercase text-lg">
                html5
              </div>

              {/* Progress */}
              <div className="flex items-center gap-5">
                <p className="dark:text-gray-400 text-gray-800 font-semibold text-base mb-3">
                  85%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-[#F31559] h-1.5 rounded-full dark:bg-[#F31559]"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            </div>
            {/* css */}
            <div
              data-aos="fade-down"
              data-aos-delay="500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-1  font-medium dark:text-white uppercase text-lg">
                CSS3
              </div>

              {/* Progress */}
              <div className="flex items-center gap-5">
                <p className="dark:text-gray-400 text-gray-800 font-semibold text-base mb-3">
                  90%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-[#F31559] h-1.5 rounded-full dark:bg-[#F31559]"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 space-y-5 lg:space-y-0">
            {/* Javascript */}
            <div
              data-aos="fade-down"
              data-aos-delay="1000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-1  font-medium dark:text-white uppercase text-lg">
                JavaScript
              </div>

              {/* Progress */}
              <div className="flex items-center gap-5">
                <p className="dark:text-gray-400 text-gray-800 font-semibold text-base mb-3">
                  70%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-[#F31559] h-1.5 rounded-full dark:bg-[#F31559]"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>
            {/* react js */}
            <div
              data-aos="fade-down"
              data-aos-delay="1500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-1  font-medium dark:text-white uppercase text-lg">
                react js
              </div>

              {/* Progress */}
              <div className="flex items-center gap-5">
                <p className="dark:text-gray-400 text-gray-800 font-semibold text-base mb-3">
                  72%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-[#F31559] h-1.5 rounded-full dark:bg-[#F31559]"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 space-y-5 lg:space-y-0">
            {/* Node js */}
            <div
              data-aos="fade-down"
              data-aos-delay="2000"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-1  font-medium dark:text-white uppercase text-lg">
                node js
              </div>

              {/* Progress */}
              <div className="flex items-center gap-5">
                <p className="dark:text-gray-400 text-gray-800 font-semibold text-base mb-3">
                  30%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-[#F31559] h-1.5 rounded-full dark:bg-[#F31559]"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
            </div>
            {/* wordpress */}
            <div
              data-aos="fade-down"
              data-aos-delay="2500"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="mb-1  font-medium dark:text-white uppercase text-lg">
                wordpress
              </div>

              {/* Progress */}
              <div className="flex items-center gap-5">
                <p className="dark:text-gray-400 text-gray-800 font-semibold text-base mb-3">
                  40%
                </p>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                  <div
                    className="bg-[#F31559] h-1.5 rounded-full dark:bg-[#F31559]"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section>
        <div className="flex items-center mt-32">
          <p>
            <svg
              className="dark:fill-[#F31559] fill-[#F31559]"
              height="60"
              width={"60"}
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.01V5l-2-2h-4l-2 2v2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6 0h-4V5h4v2z" />
            </svg>
          </p>

          <h2 className=" font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-900 dark:text-gray-400">
            Working Experience
          </h2>
        </div>
        <div className="mt-32 lg:px-20 md:px-10 sm:px-5 px-0 ">
          <ol className="relative border-s dark:border-[#5cfaff] border-gray-500 ">
            {/* first */}

            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <WorkingExperince
                date={"December | 2019"}
                title={"CPA (Cost Per Action) - Marketing"}
                description={` In my brief exposure to CPA Marketing, I garnered $50 in
                earnings. However, I have decided to shift my focus away from
                CPA Marketing, recognizing that it is not aligned with my
                long-term professional goals. I am committed to pursuing
                opportunities that better resonate with my skills and
                aspirations`}
              />
            </div>

            {/* second */}
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <WorkingExperince
                date={"February | 2021"}
                title={"WordPress Developer"}
                description={` I have dedicated three months of professional engagement with a
                reputable company, where my responsibilities primarily centered
                around WordPress development. This experience has equipped me
                with a proficient skill set and a comprehensive understanding of
                WordPress, further strengthening my expertise in the platform.`}
              />
            </div>

            {/* Third */}
            <div
              data-aos="fade-down"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <WorkingExperince
                date={"September | 2021"}
                title={"Food Panda Rider"}
                description={`
            I have served as a Delivery Specialist with Foodpanda from 2021 to 2023 in Dhaka, demonstrating a commitment to timely and efficient delivery services. This experience has cultivated my skills in logistics, time management, and customer satisfaction within a dynamic urban environment.`}
              />
            </div>
          </ol>
        </div>
      </section>
    </div>
  );
};

export default Resume;
