/* eslint-disable react/prop-types */
import "./ProjectCard.css";

function ProjectCard({ project }) {
  // eslint-disable-next-line no-unused-vars
  const { name, title, live_link, code_link, image, description } = project;

  return (
    <div>
      <div className="project-card-container">
        <div className="project-card bg-[#191D2B] dark:hover:backdrop-blur-md dark:hover:bg-white/20 ">
          <div className="img-content  ">
            <img src={image} className="z-0 relative" alt="" />
          </div>
          <div className="content z-50 relative">
            <p className="heading uppercase">{name}</p>
            <p className="px-3">
             {description}
            </p>
            <div className="flex justify-center items-end gap-x-5 mt-20">
                <a href={code_link} target="_blank" rel="noreferrer" className="cursor-pointer text-xl underline text-blue-800 font-bold">Code Link</a>
                <a href={live_link} target="_blank" rel="noreferrer" className="cursor-pointer text-xl underline text-blue-800 font-bold ">Live Link</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
