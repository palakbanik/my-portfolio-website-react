import React from "react";

import { LuFigma } from "react-icons/lu";
import { VscGithubAlt } from "react-icons/vsc";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const websites = [
    {
        link: "https://github.com/palakbanik",
        icon: <VscGithubAlt />,
    },
    {
        link: "https://www.linkedin.com/in/polok-banik-184121308/",
        icon: <CiLinkedin />,
    },
    {
        link: "https://www.figma.com",
        icon: <LuFigma />,
    },
    {
        link: "https://www.instagram.com/p_o_l_o_o_k/",
        icon: <FaInstagram />,
    },
];

export default function IconComponent() {
    return (
        <div className="flex items-center gap-4">
            {websites.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    target="_blank"
                    className="text-2xl text-textLight hover:text-textColor duration-200"
                >
                    {item.icon}
                </Link>
            ))}
        </div>
    );
}
