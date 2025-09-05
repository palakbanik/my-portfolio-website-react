import React, { useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { TiThMenu } from "react-icons/ti";

const lists = [
  { id: 1, list: "About", link: "#about" },
  { id: 1, list: "Skills", link: "#skills" },
  { id: 1, list: "Projects", link: "#work" },
  { id: 1, list: "Testimonial", link: "#testimonials" },
  { id: 1, list: "Contact", link: "#contacts" },
];

export default function Header() {
  const [menu, setMenu] = useState(false);

  return (
    <header className="w-full h-auto bg-primaryColor mx-auto fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-[1280px] h-full mx-auto p-4 md:px-8 flex items-center justify-between">
        {/* logo */}
        <div id="logo" className="text-3xl sm:text-4xl font-bold text-gray-200">
          <a href="#hero">{"<PB />"}</a>
        </div>

        {/* desktop list items */}
        <div className="hidden md:flex gap-10 ">
          <ul className="flex items-center gap-6">
            {lists.map((list, index) => (
              <li
                key={index}
                className="text-gray-300 hover:opacity-90 text-base"
              >
                <a href={list.link} key={list.id}>
                  {list.list}
                </a>
              </li>
            ))}
          </ul>

          {/* button */}
          <a href="/" className="md:border-l-2 md:pl-10">
            <button className="bg-gray-200 text-gray-900 px-4 py-1.5 rounded-xl border-none outline-none hover:opacity-90">
              Download CV
            </button>
          </a>
        </div>

        <button
          className="md:hidden text-2xl font-bold text-gray-200"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <RiCloseLargeFill className="sm:text-[32px]" />
          ) : (
            <TiThMenu className="sm:text-[32px]" />
          )}
        </button>
      </nav>

      {/* mobile list items */}
      <div className="relative">
        <div
          className={`w-full h-[100vh] p-4 flex flex-col gap-8 md:hidden border-t-2 border-gray-800 absolute top-0 ${
            menu ? "left-0" : "-left-[100%]"
          } pt-4 duration-300 bg-primaryColor `}
        >
          <ul className="flex flex-col items-left gap-6 text-gray-900 sm:text-2xl ">
            {lists.map((list, index) => (
              <li
                key={index}
                className="text-gray-300 hover:opacity-90 text-base"
              >
                <a href={list.link} key={list.id}>
                  {list.list}
                </a>
              </li>
            ))}
          </ul>

          {/* button */}
          <a
            href="/"
            className="md:border-l-2 md:pl-10 border-t-2 border-gray-800 pt-10"
          >
            <button className="bg-gray-200 w-full text-gray-900 sm:text-xl px-4 py-1.5 rounded-xl border-none outline-none hover:opacity-90">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </header>
  );
}
