import React from "react";
import Navbar from "../../Components/Navbar";
import HeroComponent from "../../Components/Home/Hero";
import ServicesCards from "../../Components/Home/Services";
import AboutUs from "../../Components/Home/About";
import Experience from "../../Components/Home/Experience";
import Testimonials from "../../Components/Home/Testimonials";
import Blog from "../../Components/Home/Blog";
import Connect from "../../Components/Home/Connect";

const HomeLayout = () => {
  return (
    <div className="flex flex-col gap-16 mt-6 mb-16">
      <Navbar />
      <HeroComponent />
      <ServicesCards />
      <AboutUs />
      <Experience />
      <Testimonials />
      <Blog />
      <Connect />
    </div>
  );
};

export default HomeLayout;
