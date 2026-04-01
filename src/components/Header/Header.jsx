import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";

const Header = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default Header;
