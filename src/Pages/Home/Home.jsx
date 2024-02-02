import SocialContact from "../../components/SocialContact/SocialContact";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import ParticlesConfig from "../../components/ParticlesBg/ParticlesConfig";
import { TypeAnimation } from "react-type-animation";
import MyBtn from "../../components/MyBtn/MyBtn";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div>
      <Helmet>
        <title>Akash Ali | Home</title>
      </Helmet>
      <div className="z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={ParticlesConfig}
        />
      </div>
      <div className="text-center min-h-[90vh] flex flex-col justify-center items-center max-w-4xl mx-auto space-y-4 ">
        <h2 className="text-black dark:text-white text-6xl lg:text-7xl font-semibold">
          {"Hi, I'm "}
          <span className="text-[#F31559]">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Md Akash Ali",
                2000,
                "React JS Developer",
                2000,
                "Front End Developer",
                2000,
                "Junior MERN Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </h2>
        <div className="text-center flex flex-col justify-center text-black dark:text-gray-400 text-xl">
          <p>
            {`I'm always open to new opportunities, collaborations, and discussions
        about the exciting possibilities in the world of web development.Whether you're a fellow developer, potential collaborator, or someone
        with a shared passion for innovation, I'd love to connect.`}
          </p>
        </div>
        <SocialContact />
        <MyBtn
          text={"Download  resume "}
          url={'https://drive.google.com/file/d/1m3frPyxeDbTXSLw6kjEwmn9B7x2I_oKI/view'}
        />
      </div>
    </div>
  );
};

export default Home;
