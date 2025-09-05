import React from "react";
import Heading from "../../MiniComponents/Heading/Heading";
import HeadingText from "../../MiniComponents/HeadingText/HeadingText";

// images
import js from "../../../assets/icon-javscript.svg";
import ts from "../../../assets/icon-typescript.png";
import figma from "../../../assets/icon-figma.svg";
import react from "../../../assets/icon-react.svg";
import tailwindcss from "../../../assets/icon-tailwindcss.png";
import git from "../../../assets/vector.png";
import github from "../../../assets/github.png";

const images = [
  {
    name: "JavaScript",
    image: js,
  },
  {
    name: "TypeScript",
    image: ts,
  },
  {
    name: "React",
    image: react,
  },
  {
    name: "Tailwindcss",
    image: tailwindcss,
  },
  {
    name: "Figma",
    image: figma,
  },
  {
    name: "Git",
    image: git,
  },
  {
    name: "GitHub",
    image: github,
  },
];

export default function Skills() {
  return (
    <section>
      <div
        id="skills"
        className="max-w-[1280px] mx-auto px-4 py-20 flex flex-col items-center text-center justify-center"
      >
        <div>
          <Heading text={"Skills"} />
        </div>

        <div className="mt-5">
          <HeadingText
            text={"The skills, tools and technologies I am really good at:"}
          />
        </div>

        {/* images */}
        <div className="mt-6 lg:mt-8 gap-12 flex flex-wrap items-center justify-center">
          {images.map((img, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center justify-center"
            >
              <img
                src={img.image}
                alt="language image"
                className="w-16 lg:w-20 h-16 lg:h-20 object-contain rounded-sm"
                draggable="false"
              />
              <p className="text-textLight">{img.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
