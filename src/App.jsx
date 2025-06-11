
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Portfolio/Navbar";
import Home from "./Portfolio/Home";
import About from "./Portfolio/About";
import Resume from "./Portfolio/Resume";
import Skills from "./Portfolio/Skills";
import Project from "./Portfolio/Project";
import Contact from "./Portfolio/Contact";
import Footer from "./Portfolio/Footer";


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main >
      <Navbar />
      <Home/>
      <About/>
      <Resume/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>

    </main>
  );
}

export default App;


