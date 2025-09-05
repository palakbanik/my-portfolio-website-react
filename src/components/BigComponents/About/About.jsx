import React from "react";
import ImagePart from "../../MiniComponents/ImagePart/ImagePart";

import plkImg from "../../../assets/about-img.jpg";
import Heading from "../../MiniComponents/Heading/Heading";

const aboutMe = [
  "Diploma in Textile Engineer",
  "Avid learner",
  "Aspiring web developer",
  "Full time freelancer",
];

export default function About() {
  return (
    <section id="about" className="bg-blueDeepColor py-20">
      <div className="flex items-center justify-center mb-20">
        <Heading text={"About me"} />
      </div>
      <div className="max-w-[1280px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col md:flex-row items-center lg:items-start  justify-between gap-12 lg:gap-28 lg:-mt-10">
          {/* image part */}
          <div className="mt-4 lg:mt-14">
            <ImagePart image={plkImg} />
          </div>

          {/* content part */}
          <div className="flex flex-col items-start">
            <h1 className="text-2xl sm:text-3xl  font-semibold leading-normal my-5 text-textColor">
              Curious about me? Here you have it:
            </h1>
            <div className="text-sm lg:text-base text-textLight flex flex-col gap-4 sm:gap-6 max-w-[600px]">
              <p>
                I'm a passionate, self-proclaimed designer who specializes in
                front-end development. I am very enthusiastic about bringing the
                technical and visual aspects of digital products to life. User
                experience, pixel perfect design, and writing clear, readable,
                highly performant code matters to me.
              </p>
              <p>
                I began my journey as a web developer in 2024, and since then,
                I've continued to grow and evolve as a developer, taking on new
                challenges and learning the latest technologies along the way.
                I'm building cutting-edge web applications using modern
                technologies such as Next.js, TypeScript, Tailwindcss and much
                more.
              </p>
              <p>
                I am very much a progressive thinker and enjoy working on
                products end to end, from ideation all the way to development.
              </p>

              <p>Finally, some quick bits about me.</p>

              <ul className="ml-7 grid grid-cols-2 gap-3">
                {aboutMe.map((item, index) => (
                  <li key={index} className="list-disc">
                    {item}
                  </li>
                ))}
              </ul>

              <p>
                One last thing, I'm available for freelance work, so feel free
                to reach out and say hello! I promise I don't bite 😉
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
