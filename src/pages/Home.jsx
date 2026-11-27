import React, { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Services from "../sections/Services";
import Contact from "../sections/Contact";


function Home() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Services/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default Home;
