import React from "react";
import Heading from "../../MiniComponents/Heading/Heading";
import HeadingText from "../../MiniComponents/HeadingText/HeadingText";

// images

import reviewOne from "../../../assets/reviewOne.jpg";
import reviewTwo from "../../../assets/reviewTwo.jpeg";
import reviewThree from "../../../assets/reviewThree.jpg";

const testimonials = [
  {
    id: 1,
    image: reviewOne,
    name: "Michael Thompson",
    founder: "abc.com",
    para: "Great guy, highly recommended for any COMPLEX front-end development job! His skills are top-notch and he will be an amazing addition to any team.",
  },
  {
    id: 2,
    image: reviewTwo,
    name: "James Carter",
    founder: "abc.com",
    para: "Polok was extremely easy and pleasant to work with and he truly cares about the project being a success. Polok has a high level of knowledge and was able to work on my frontend application without any issues.",
  },
  {
    id: 3,
    image: reviewThree,
    name: "Emily Davis",
    founder: "abc.com",
    para: "I am really impressed. He is very very good at what he does:) I would recommend Polok will rehire in the future for Frontend development.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-primaryColor">
      <div className="max-w-[1280px] mx-auto px-4 py-20 flex flex-col items-center justify-center gap-6 md:gap-7">
        {/* heading */}

        <div>
          <Heading text={"Testimonials"} />
        </div>

        {/* heading para */}

        <div>
          <HeadingText text={"Nice things people have said about me:"} />
        </div>

        {/* card */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch justify-center gap-6 w-full">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-blueLightColor flex flex-col mx-auto items-center justify-center gap-6 p-8 sm:p-10 rounded-lg max-w-[373px] max-h-[428px] "
            >
              <img
                className="w-16 h-16 object-cover rounded-full"
                src={item.image}
                alt="reviewer image"
                draggable="false"
              />

              <p className="text-sm lg:text-base text-textLight leading-6 flex-1">
                {item.para}
              </p>

              <div className="flex flex-col items-center justify-center gap-2 flex-1">
                <h4 className="font-semibold text-textColor md:text-lg">
                  {item.name}
                </h4>

                <p className="text-textLight text-xs md:text-sm">
                  Founder - {item.founder}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
