import React from "react";
import project1 from '../assets/portfolio/project1.png';
import project2 from '../assets/portfolio/project2.jpg';

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: project1, href: "https://github.com/BlackHues", },
    { id: 2, src: project1, href: "https://github.com/BlackHues", },
    { id: 3, src: project1, href: "https://github.com/BlackHues", },
    { id: 4, src: project2, href: "https://github.com/BlackHues", },
    { id: 5, src: project2, href: "https://github.com/BlackHues", },
    { id: 6, src: project2, href: "https://github.com/BlackHues", },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-5">Check out some of my work right here</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="portfolio"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <a href={href} target="blank" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
