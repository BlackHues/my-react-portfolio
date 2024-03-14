import React from "react";
import Html from "../assets/html.png";
import Css from "../assets/css-3.png";
import django from "../assets/django.png";
import react from "../assets/react.png";
import python from "../assets/python.png";
import JS from "../assets/javascript.png";

const Experience = () => {
  const skillset = [
    {
      id: 1,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: python,
      title: "PYTHON",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: django,
      title: "DJANGO",
      style: "shadow-green-500",
    },
    {
      id: 5,
      src: react,
      title: "REACT",
      style: "shadow-cyan-600",
    },
    {
      id: 6,
      src: JS,
      title: "JAVASCRIPT",
      style: "shadow-purple-600",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-black min-h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p name="experience" className="text-4xl font-bold inline border-b-4 p-0 border-gray-500">
            Experience
          </p>
          <p className="py-5">These are the technologies I've worked with</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {skillset.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
