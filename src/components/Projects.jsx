import React from "react";
import ProjectsItem from "./ProjectsItem";
import hoodImg from "../assets/hood.jpg";
import ctImg from "../assets/ct.jpg";
import portImg from "../assets/Capture.jpg";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsam in
        voluptates tempore totam quod corporis optio, doloribus ex dolorum vitae
        expedita sequi aperiam. Debitis maiores facere aut omnis dicta.
      </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectsItem img={hoodImg} title='HoodBank'/>
            <ProjectsItem img={ctImg} title='CTDigiTal' />
            <ProjectsItem  img={portImg} title='Portfolio' />
            <ProjectsItem  img={hoodImg} title='HoodBank' />
        </div>
    </div>
  );
};

export default Projects;
