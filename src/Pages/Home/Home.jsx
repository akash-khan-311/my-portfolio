import SocialContact from "../../components/SocialContact/SocialContact";
import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";
import ParticlesConfig from "../../components/ParticlesBg/ParticlesConfig";
import { TypeAnimation } from "react-type-animation";

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
            <TypeAnimation
              splitter={(str) => str.split(/(?= )/)} // 'Lorem ipsum dolor' -> ['Lorem', ' ipsum', ' dolor']
              sequence={[
                `I'm always open to new opportunities, collaborations, and discussions
        about the exciting possibilities in the world of web development.Whether you're a fellow developer, potential collaborator, or someone
        with a shared passion for innovation, I'd love to connect.`,
                18000,
                "",
                `My journey in the realm of technology began with a curiosity to understand how things work under the hood. Over the years, I've honed my skills in MongoDB, Express.js, React.js, and Node.js—the MERN stack—transforming ideas into functional and user-friendly digital experiences.`,
                18000,
                `I believe in the power of technology to make a positive impact on people's lives. Each line of code I write is fueled by a desire to create solutions that are not just functional but also intuitive and delightful for users.`,
                15000,
              ]}
              speed={{ type: "keyStrokeDelayInMs", value: 30 }}
              omitDeletionAnimation={true}
              repeat={Infinity}
            />
          </p>
        </div>
        <SocialContact />
      </div>
    </div>
  );
};

export default Home;
