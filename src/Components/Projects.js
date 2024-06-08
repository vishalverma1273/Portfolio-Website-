import React from "react";
import { Styles } from "../utils/Style";
import { projects } from "../Constants";
import Tilt from "react-parallax-tilt";
import { TbWorldWww } from "react-icons/tb";
import { SiGithub } from "react-icons/si";
function Projects() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Projects"
      >
        <span className={Styles.sectionHeadText}>Projects</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          Follwing projects showcases my skills and experience through
          real-world examples of my work. Eaxh projects is briefly described
          with links to code repositories and live demos in it. It refects my
          ability to solve complex problems, with different technologies and
          manage projects effectively.
        </div>
      </div>
      <div className="flex flex-wrap p-8 justify-evenly items-center">
        {projects.map(project => (
          <Tilt
            key={project.name}
            className="w-[300px] h-[500px]  flex-col justify-evenly shadow-2xl m-10 items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl border-2 border-violet-900"
          >
            <div className=" justify-center items-center mb-3">
              <div className="flex justify-center items-center">
                <div className="h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                  <a href={project.source_deploy_link} target="blank">
                    <TbWorldWww className=" text-3xl font-bold text-violet-600" />
                  </a>
                </div>
                <div className=" h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500 flex justify-center items-center">
                  <a href={project.source_code_link} target="blank">
                    <SiGithub className=" text-3xl font-bold text-violet-600" />
                  </a>
                </div>
              </div>
              <img
                className="flex justify-center h-[200px] w-[250px] self-center border-2 border-pink-200 rounded-2xl"
                src={project.image}
                alt={project.name}
              />
              <div className="flex justify-center text-2xl text-violet-600  font-extrabold">
                {project.name}
              </div>
              <div className="text-center">
                <span className="text-orange-500">{project.description}</span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </div>
  );
}

export default Projects;
