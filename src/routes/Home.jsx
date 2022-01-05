import React from "react";
import Banner from "../components/Home/Banner";
import Services from "../components/Home/Services";
import About from "../components/Home/About";
import Testimonials from "../components/Home/Testimonials";

export default function Home() {
  return (
    <div>
      <Banner />
      <Services />
      <About />
      <Testimonials />
    </div>
  );
}
