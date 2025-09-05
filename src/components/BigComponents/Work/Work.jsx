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
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    image: eCommerceWebsite,
    title: "E-Commerce Website",
    link: "https://ecommercae-website.netlify.app/",
    para: "Make a responsive e-commerce website using react.",
  },
  {
    image: headlessWebsite,
    title: "Headless Technology Website",
    link: "https://headlesstask.netlify.app/",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
  },
  {
    image: musicWebsite,
    title: "Animated Website",
    link: "",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
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
