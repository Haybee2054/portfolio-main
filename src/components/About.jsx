import React from "react";
import aboutImage from '../assets/about_temp.jpg';
import cv from "../assets/cvupdate.pdf";

const About = () => {
  return (
    <div className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        About Me
      </h1>
      <img
        className="w-full object-cover object-left rounded-3xl py-5 md:w-full object-cover object-center"
        src={aboutImage}
        alt="Abraham Odubena"
      />
      <p className="my-10 text-base font-normal text-stone-500">
        My name is Abraham Odubena, I am passionate about developing and
        building user-friendly websites and online applications that offer the
        end-users a positive experience, therefore I decided to become a
        front-end web developer.<br/><br/>The visual and interactive components of a
        website are built using programming languages like HTML, CSS, and
        JavaScript. In general, front-end web development is a difficult and
        rewarding area that gives me the chance to apply my imagination,
        technical expertise, and problem-solving skills to create websites and
        applications that enhance user experiences.
      </p>
      <a href={cv} download="Abraham Odubena">
        <button className="px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
          Download CV
        </button>
      </a>
    </div>
  );
};

export default About;
