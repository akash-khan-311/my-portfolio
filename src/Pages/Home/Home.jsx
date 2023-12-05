import SocialContact from "../../components/ParticlesBg/SocialContact/SocialContact";

const Home = () => {
  return (
    <div className="text-center  min-h-screen flex flex-col justify-center items-center max-w-4xl mx-auto space-y-4">
      <h2 className="text-black dark:text-white text-6xl lg:text-7xl font-semibold">
        {"Hi, I'm"} <span className="text-[#007BFF]">Akash Khan</span>
      </h2>
      <div className="text-center flex flex-col justify-center text-black dark:text-gray-400 text-xl">
        <p>
          {`I'm always open to new opportunities, collaborations, and discussions
        about the exciting possibilities in the world of web development.Whether you're a fellow developer, potential collaborator, or someone
        with a shared passion for innovation, I'd love to connect.`}
        </p>
      </div>
      <SocialContact />
    </div>
  );
};

export default Home;
