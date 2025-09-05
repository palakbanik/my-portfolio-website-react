import React from "react";
import Heading from "../../MiniComponents/Heading/Heading";
import HeadingText from "../../MiniComponents/HeadingText/HeadingText";
import WorkCard from "../../MiniComponents/WorkCard/WorkCard";

// images
import groceryWebsite from "../../../assets/grocery-website.png";
import eCommerceWebsite from "../../../assets/e-commerce-website.png";
import headlessWebsite from "../../../assets/headless-tech-website.png";
import musicWebsite from "../../../assets/music-website.png";

const works = [
  {
    image: groceryWebsite,
    title: "Grocery Website",
    link: "",
    para: "I designed and developed a multi-page grocery website focusing on a clean UI, intuitive navigation, and responsive layouts. The project demonstrates my skills in structuring multiple pages, styling with modern web technologies, and creating a user-friendly shopping experience.",
  },
  {
    image: eCommerceWebsite,
    title: "E-Commerce Website",
    link: "https://ecommercae-website.netlify.app/",
    para: "A responsive single-page e-commerce website featuring a modern design, smooth navigation, dark mode support, and a user-friendly shopping interface. This project highlights my front-end development and UI design skills.",
  },
  {
    image: headlessWebsite,
    title: "Headless Technology Website",
    link: "https://headlesstask.netlify.app/",
    para: "I successfully completed a project assigned by Headless Technologies, where I transformed their requirements into a fully functional and responsive web solution. This project reflects my ability to follow real-world tasks, implement clean UI.",
  },
  {
    image: musicWebsite,
    title: "Animated Website",
    link: "",
    para: "I built a clean and responsive simple website, focusing on a straightforward design and smooth user experience. This project showcases my ability to create functional and visually appealing web pages efficiently.",
  },
];

export default function Experience() {
  return (
    <section id="work" className="bg-blueDeepColor w-full h-auto">
      <div className="max-w-[1280px] mx-auto px-4 py-20 flex flex-col items-center justify-center text-center gap-6">
        <div>
          <Heading text={"Projects"} />
        </div>

        <div>
          <HeadingText text={"Some of the noteworthy projects I have built:"} />
        </div>

        {/* content */}
        <div className="mt-6">
          <WorkCard work={works} />
        </div>
      </div>
    </section>
  );
}
