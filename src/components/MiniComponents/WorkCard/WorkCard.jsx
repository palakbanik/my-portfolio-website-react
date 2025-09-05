import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const stacks = [
  "React",
  "Next.js",
  "Typescript",
  "Tailwindcss",
  "Figma",
  "Git",
  "GitHub",
];

export default function WorkCard({ work }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:grid-cols-1 w-full">
      {work.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center text-start justify-center bg-imgBg overflow-hidden rounded-xl`}
        >
          {/* image part */}
          <div className="bg-blueLightColor p-8 flex-1 lg:w-full lg:h-full flex items-center">
            <a href={card.link}>
              <img
                className=" rounded-lg "
                src={card.image}
                alt="projects image"
                draggable="false"
              />
            </a>
          </div>

          {/* text part */}
          <div className="p-8 flex flex-col gap-6 lg:gap-7 flex-1">
            <h1 className="text-xl font-bold lg:text-2xl text-textColor">
              {card.title}
            </h1>

            <p className="text-textLight text-sm md:text-base ">{card.para}</p>

            <div className="flex flex-wrap gap-2">
              {stacks.map((stack, index) => (
                <p
                  key={index}
                  className="bg-blueLightColor py-1 px-5 rounded-full text-textLight text-sm "
                >
                  {stack}
                </p>
              ))}
            </div>

            <a href={card.link} className="text-textColor text-lg md:text-xl">
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
