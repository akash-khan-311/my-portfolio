import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import './Project.css'
import PageTitle from "../../components/PageTitle/PageTitle";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const category = useParams();
  const categories = ["all", "css", "javascript", "react", "node js"];
  const initialIndex = categories.indexOf(category);

  const [tabIndex, setTabIndex] = useState(initialIndex + 1);
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  const css = projects.filter(project=> project.category === 'css')
  const react = projects.filter(project=> project.category === 'react')
  const javascript = projects.filter(project=> project.category === 'javascript')
  const nodejs = projects.filter(project=> project.category === 'react+nodejs')

// const newIndex = initialIndex + 1;


  return (
    <div className="">
       <Helmet>
        <title>Akash Ali | Projects</title>
      </Helmet>
      <PageTitle title={'portfolios'}/>
     <div className="text-gray-100 dark:text-white mt-32">
     <Tabs  defaultIndex={tabIndex} onSelect={(index)=> setTabIndex(index)}>
        <TabList className="flex justify-center flex-wrap gap-5 mb-32">
          <Tab className="text-xl bg-blue-gray-600 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#007BFF] duration-300 outline-none ">ALL</Tab>
          <Tab className="text-xl bg-blue-gray-600 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#007BFF] duration-300 outline-none ">CSS</Tab>
          <Tab className="text-xl bg-blue-gray-600 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#007BFF] duration-300 outline-none ">JAVASCRIPT</Tab>
          <Tab className="text-xl bg-blue-gray-600 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#007BFF] duration-300 outline-none ">REACT JS</Tab>
          <Tab className="text-xl bg-blue-gray-600 px-7 py-2 rounded-sm cursor-pointer hover:bg-[#007BFF] duration-300 outline-none ">NODE JS</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              projects.map(project => <ProjectCard key={project.id} project={project}/>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              css.map(project => <ProjectCard key={project.id} project={project}/>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              javascript.map(project => <ProjectCard key={project.id} project={project}/>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              react.map(project => <ProjectCard key={project.id} project={project}/>)
            }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
              nodejs.map(project => <ProjectCard key={project.id} project={project}/>)
            }
          </div>
        </TabPanel>
      </Tabs>
     </div>
    </div>
  );
};

export default Projects;
