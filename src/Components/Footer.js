import React from "react";
import { GrLinkedinOption } from "react-icons/gr";
import { GrMail } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
function Footer() {
  return (
    <div>
      <div className="w-[screen] bg-black">
        <div className="flex flex-row p-2 flex-wrap justify-around">
          <a
            href="https://www.linkedin.com/in/vishal-verma-69bab0219/"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <GrLinkedinOption className="text-white"></GrLinkedinOption>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">Linkedin</span>
          </a>

          <a
            href="vishalverma1273@gmail.com"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <GrMail className="text-white"></GrMail>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">
              vishalverma1273@gmail.com
            </span>
          </a>

          <a
            href="//"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <BiSolidPhoneCall className="text-white"></BiSolidPhoneCall>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">6397126764</span>
          </a>

          <a
            href="https://github.com/vishalverma1273"
            target="blank"
            className="text-lg flex flex-row text-violet-300"
          >
            <div className="h-[30px] w-[30px] rounded-full flex justify-center items-center bg-violet-400">
              <BsGithub className="text-white"></BsGithub>
            </div>
            <span className="text-white ml-1 mt-[0.1rem]">Github</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
