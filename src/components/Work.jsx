import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2023,
    title: "CT DiGiTal",
    duration: "Present",
    details:
      "Built web pages for an event management platform also built web pages for a clinic.",
  },
  {
    year: 2023,
    title: "Video-Chatapp",
    duration: "",
    details:
      "I developed a Real time Video-Chat app with React Js,Node Js, WebRTC, PeerJS. A web application that is aimed at creating a platform where users can interact with each other.",
  },
      {
        year: 2023,
        title: "HooBank",
        duration: "",
        details:
          "A website for a fintech platform for payment solutions online, I built this website with React Js and Tailwind CSS.",
      },

  {
    year: 2022,
    title: "GOMYCODE",
    duration: "Present",
    details:
      "Worked with React Js to build Web Pages, Fetching of API's and Querying database.",
  },
  {
    year: 2021,
    title: "Medixx",
    duration: "1 Month",
    details:
      "On this team project, I worked as the Front-end developer(I worked on the User interface of the website) for the Medixx website. A website that is aimed at solving one of the  Sustainable Development Goals (SDG): Good Health and Well Being.",
  },
];
const Work = () => {
  return ( 
  <div id='work' className="max-w-[1040px] m-auto md:pl-20 p-4
    ">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] py-10">Work Experience</h1>
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


