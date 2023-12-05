import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
const SocialContact = () => {
  return (
    <div className="flex justify-center gap-x-5">
      {/* Facebook */}
      <div className="p-4 border rounded-full cursor-pointer text-black dark:text-white dark:hover:text-[#007BFF] border-gray-500 hover:border-[#007BFF] hover:text-[#007BFF] duration-500">
        <a
          href="https://www.facebook.com/iyaRahmanirRahim"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookSquare className="text-2xl " />
        </a>
      </div>
      {/* Linkedin */}
      <div className="p-4 border rounded-full cursor-pointer text-black dark:text-white dark:hover:text-[#007BFF] border-gray-500 hover:border-[#007BFF] hover:text-[#007BFF] duration-500">
        <a
          href="https://www.linkedin.com/in/akash-khan-9585a02a0/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-2xl " />
        </a>
      </div>
      {/* GitHub */}
      <div className="p-4 border rounded-full cursor-pointer text-black dark:text-white  border-gray-500 hover:border-pink-100 hover:text-pink-100  dark:hover:text-pink-100 duration-500">
        <a
          href="https://github.com/akash-khan-311/"
          target="_blank"
          rel="noreferrer"
        >
          <FaSquareGithub className="text-2xl  " />
        </a>
      </div>
    </div>
  );
};

export default SocialContact;
