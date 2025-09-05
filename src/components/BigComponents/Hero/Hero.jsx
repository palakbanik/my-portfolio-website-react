import { SlLocationPin } from "react-icons/sl";
import ImagePart from "../../MiniComponents/ImagePart/ImagePart";

import plkImg from "../../../assets/hero-img.jpg";
import IconComponent from "../../MiniComponents/IconComponent/IconComponent";

export default function Hero() {
  return (
    <section id="hero">
      <div
        className="max-w-[1280px] lg:h-[100vh] mx-auto px-4 py-16 flex flex-col md:flex-row-reverse items-center justify-center gap-12"
        draggable="false"
      >
        {/* image part */}
        <ImagePart image={plkImg} />

        {/* content part */}
        <div className="flex">
          <div className="max-w-[768px] flex flex-col items-start gap-12">
            <div className="flex flex-col text-start gap-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-textColor">
                Hi, I’m Polok 👋
              </h1>
              <p className="text-sm max-w-[800px] text-textLight leading-snug lg:leading-normal">
                I’m a passionate Frontend Development currently working with
                (React.js) to build modern, interactive, and user-friendly web
                applications. While my primary focus right now is on mastering
                frontend development, I’m also preparing myself to become a Full
                Stack Developer in the future. I have a strong foundation in
                (HTML, CSS, JavaScript, Tailwind CSS, Git, GitHub) and a good
                understanding of (TypeScript). My journey is driven by a deep
                curiosity to learn, create, and deliver clean, scalable
                solutions that bring ideas to life on the web.
              </p>
            </div>

            {/* location */}
            <div className="flex flex-col items-start gap-2">
              <div className="flex items-center gap-2 text-textLight">
                <div className="text-xl">
                  <SlLocationPin />
                </div>
                <div className="text-base text-textLight">
                  Dhaka, Bangladesh
                </div>
              </div>
              <div className="flex items-center gap-2 text-textLight">
                <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                <p>Available for new projects</p>
              </div>
            </div>

            <IconComponent />
          </div>
        </div>
      </div>
    </section>
  );
}
