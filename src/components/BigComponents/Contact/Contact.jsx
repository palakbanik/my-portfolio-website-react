import React from "react";
import Heading from "../../MiniComponents/Heading/Heading";
import HeadingText from "../../MiniComponents/HeadingText/HeadingText";
import IconComponent from "../../MiniComponents/IconComponent/IconComponent";

import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";

export default function Contact() {
  return (
    <section id="contacts" className="bg-blueDeepColor py-16">
      <div className="max-w-[1280px] mx-auto p-4 flex flex-col items-center justify-center text-center gap-12">
        {/* heading */}
        <div className="flex flex-col items-center justify-center mx-auto gap-4 lg:gap-6 text-center max-w-[650px]">
          <Heading text={"Get in touch"} />
          <HeadingText
            text={
              "What’s next? Feel free to reach out to me if you're looking for a frontend developer, have a query, or simply want to connect."
            }
          />
        </div>

        {/* contact part */}

        <div className="flex flex-col items-center gap-1">
          <h1 className="flex items-center gap-3 text-textColor text-xl md:text-2xl lg:text-3xl font-bold">
            <span>
              <GoMail className=" text-2xl font-bold" />
            </span>
            <p>polokbonik2@gmail.com</p>
          </h1>

          <h1 className="flex items-center gap-3 text-textColor text-xl md:text-2xl lg:text-3xl font-bold">
            <span>
              <BsTelephone className=" text-2xl font-bold" />
            </span>
            <p>01700-812413</p>
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-sm text-textLight">
            You may also find me on these platforms!
          </p>

          <IconComponent />
        </div>
      </div>
    </section>
  );
}
