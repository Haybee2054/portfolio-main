import React from "react";
import Ab1 from "../assets/Ab1.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaTwitter, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left md:w-full object-cover object-center"
        src={Ab1}
        alt="Abraham Odubena"
      />
      <div
        className="w-full h-screen absolute top-0 left-0
      "
      >
        <div
          className="max-w-[700px] m-auto h-full w-full flex
         flex-col justify-center lg:items-start items-center"
        >
          <h1
            className="sm:text-4xl text-4xl font-bold
           text-white md: text-3xl"
          >
            I'm Abraham Odubena
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-white">
            I'm a
            <TypeAnimation
              sequence={[
                "Front-end developer", // Types 'One'
                2000, // Waits 1s
                "Problem Solver", // Deletes 'One' and types 'Two'
                2000, // Waits 2s
                "Tech Enthusiast", // Types 'Three' without deleting 'Two'
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a href="https://twitter.com/Haybee220">
            <FaTwitter className="cursor-pointer text-white" size={20} />
            </a>
            <a href="https://instagram.com/hay_bee__?igshid=YmMyMTA2M2Y=">
            <FaInstagram className="cursor-pointer text-white" size={20} />
            </a>
            <a href="https://github.com/Haybee2054">
            <FaGithub className="cursor-pointer text-white" size={20} />
            </a>
            <a href="https://www.linkedin.com/in/abraham-odubena1/">
            <FaLinkedinIn className="cursor-pointer text-white" size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
