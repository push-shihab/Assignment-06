import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import About from "../About/About";

const Header = ({ isSelected, setSelected }) => {
  return (
    <div>
      <Navbar isSelected={isSelected} setSelected={setSelected}></Navbar>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default Header;
