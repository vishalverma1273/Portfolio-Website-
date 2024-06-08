import React from "react";
import Tilt from "react-parallax-tilt";
import { Styles } from "../utils/Style";
import { services, technologies, projects } from "../Constants/index.js";
import { motion } from "framer-motion";
import "./style.css";
function Overview() {
  return (
    <div>
      <div
        className="flex-row items-center pl-5 justify-center pt-3"
        id="Overview"
      >
        <span className={Styles.sectionHeadText}>Introduction</span>
        <hr className="w-[35%]"></hr>
        <div className={Styles.sectionText}>
          I'm a MERN stack developer with expertise in MongoDB, Express.js,
          React, and Node.js. I specialize in building dynamic, high-performance
          web applications. My skills include front-end design, back-end
          development, and database management, enabling me to create seamless,
          user-friendly experiences from start to finish. Passionate about
          coding, I thrive on solving complex problems and continuously learning
          new technologies.
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {services.map(service => (
          <div>
            <Tilt
              key={service.icon}
              className="parallax-effect-glare-scale"
              perspective={500}
              glareColor="fed7aa"
              glareEnable={true}
              glareMaxOpacity={0.5}
              sale={1.02}
              gyroscope={true}
            >
              <div className="p-3 m-3 flex flex-col justify-evenly items-center">
                <img
                  className="h-[100px] w-[100px] "
                  src={service.icon}
                  alt={service.title}
                />
                <div className="m-5 text-violet-500">{service.title}</div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {technologies.map(technology => (
          <div
            key={technology.name}
            className="m-4 mt-5 h-[100px] w-[100px] rounded-3xl shadow-2xl border-[1px]border-violet-400 hover:shadow-orange-300"
          >
            <img className="p-2" src={technology.icon} alt={technology.name} />
            <div className="text-violet-600 justify-center flex">
              {" "}
              {technology.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Overview;
