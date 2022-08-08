import React from "react";
import Navbar from "../../Components/Navbar";
import HeroComponent from "../../Components/Home/Hero";
import ServicesCards from "../../Components/Home/Services";

const HomeLayout = () => {
  return (
    <div className="flex flex-col gap-16 mt-6 mb-12">
      <Navbar />
      <HeroComponent />
      <ServicesCards />
    </div>
  );
};

export default HomeLayout;
