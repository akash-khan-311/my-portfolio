import SocialContact from "../../components/SocialContact/SocialContact";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import ParticlesConfig from "../../components/ParticlesBg/ParticlesConfig";
import { TypeAnimation } from "react-type-animation";
import MyBtn from "../../components/MyBtn/MyBtn";

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
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={ParticlesConfig}
      />
      <div className="text-center  min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto space-y-4">
        <h2 className="text-black dark:text-white text-6xl lg:text-7xl font-semibold">
          {"Hi, I'm"}{" "}
          <span className="text-[#007BFF]">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Akash Khan",
                2000,
                "React Developer",
                2000,
                "",
                2000,
                "MERN Stack Developer",
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
          adress={
            "https://drive.google.com/u/0/uc?id=1pp_yaZWTGE5D64XM1_HmdJeJ867LUHAc&export=download"
          }
          text={"Download  resume "}
        />
      </div>
    </div>
  );
};

export default Home;
