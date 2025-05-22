import React from "react";
import ProjectsItem from "./ProjectsItem";
// import hoodImg from "../assets/bank.jpg";
import ctImage from '../assets/image_temp.jpg'; 
//import portImg from "../assets/Capture.jpg";
import chat from "../assets/chat_temp.jpg"
import clinic from "../assets/clinic_temp.jpg";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">

      </p>
        <div className="grid sm:grid-cols-2 gap-12">
        <a href= 'https://zippy-cannoli-da4a28.netlify.app/'>
          <ProjectsItem img={ctImage} title='CTDigiTal' />
                <p className='text-center p-3 rounded-full bg-white text-gray-700 font-bold cursor-pointer text-lg mt-5
                '>View </p>
            </a>
            <a href= 'https://video-client-side.onrender.com/'>
              <ProjectsItem img={chat} title='Video-Chat'/>
                <p className='text-center p-3 rounded-full bg-white text-gray-700 font-bold cursor-pointer text-lg mt-5
                '>View</p>
            </a>
            <a href= 'https://hoodbank.netlify.app/'>
              <ProjectsItem  img={chat} title='HooBank' />
                <p className='text-center p-3 rounded-full bg-white text-gray-700 font-bold cursor-pointer text-lg mt-5
                '>View</p>
            </a>
            <a href= 'https://quantum-clinic1.netlify.app/'>
              <ProjectsItem  img={clinic} title='Clinic ' />
                <p className='text-center p-3 rounded-full bg-white text-gray-700 font-bold cursor-pointer text-lg mt-5
                '>View</p>
            </a>
        </div>
    </div>
  );
};

export default Projects;
