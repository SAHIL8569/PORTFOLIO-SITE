import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import About from "../components/Sections/About";
import Projects from "../components/Sections/Projects";
import Contact from "../components/Sections/Contact";
import Services from "../components/Sections/Services"
import Chart from "../components/Sections/Chart";
import Footer from "../components/Sections/Footer";


export default function Landing() {
  return (
    <>

      <TopNavbar />
      <Header />
      <About/>
      <Services/>
      <Projects/>
      <Chart/>
      <Contact />
      <Footer />

    </>
  );
}


