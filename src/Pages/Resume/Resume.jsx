import PageTitle from "../../components/PageTitle/PageTitle";

const Resume = () => {
  return (
    <div>
      <section>
        <PageTitle title={"my skills"} />
        <div className="mt-32 lg:px-20 md:px-10 sm:px-5 px-0 space-y-5">
          {/* first */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 space-y-5 lg:space-y-0">
            {/* Html */}
            <div>
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
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            </div>
            {/* css */}
            <div>
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
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "85%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Second */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 space-y-5 lg:space-y-0">
            {/* Javascript */}
            <div>
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
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "70%" }}
                  />
                </div>
              </div>
            </div>
            {/* react js */}
            <div>
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
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "72%" }}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Third */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 space-y-5 lg:space-y-0">
            {/* Node js */}
            <div>
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
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "30%" }}
                  />
                </div>
              </div>
            </div>
            {/* wordpress */}
            <div>
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
                    className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
                    style={{ width: "40%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
