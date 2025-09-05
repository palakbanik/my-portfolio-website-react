import React from "react";
import Header from "../BigComponents/Header/Header";
import Hero from "../BigComponents/Hero/Hero";
import About from "../BigComponents/About/About";
import Skills from "../BigComponents/Skills/Skills";
import Work from "../BigComponents/Work/Work";
import Testimonials from "../BigComponents/Testimonials/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Testimonials />
    </>
  );
}
