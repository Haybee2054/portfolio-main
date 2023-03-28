import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "CT DiGiTal",
    duration: "Present",
    details:
      "Translating of design to codes with Html,Css,Bootstrap,Sass,Tailwind,Javascript,ReactJs",
  },
  {
    year: 2022,
    title: "GOMYCODE",
    duration: "Present",
    details:
      "Translating of design to codes with HTML,CSS,BOOTSTRAP,SASS,Javascript",
  },
  {
    year: 2022,
    title: "Chatapp",
    duration: "1 Month",
    details:
      "On this project, I worked as a Front-end developer for the Chatapp website, a website that is aimed at creating a platform where users can interact with each other.",
  },
  {
    year: 2021,
    title: "Medixx",
    duration: "1 Month",
    details:
      "On this team project, I worked as the Front-end developer for the Medixx website, a website that is aimed at solving one of the (SDG) Sustainable Development Goals: Good Health and Well Being. I worked on the User interface of the website.",
  },
];
const Work = () => {
  return ( 
  <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4
    py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item, idx) => (
            <WorkItem
            key={idx}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            />
        ))}
  </div>
  )
};

export default Work;
