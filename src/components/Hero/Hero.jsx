import React from "react";
import image from "../../assets/banner.png";
import { SiSocketdotio } from "react-icons/si";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto md:flex flex-wrap gap-15 justify-center py-21.25">
      <div className="space-y-4 flex flex-col justify-center">
        <span className="text-[#9514FA] bg-[#E1E7FF] flex gap-2 items-center justify-center rounded-4xl w-75 px-3 py-2 font-medium">
          <SiSocketdotio></SiSocketdotio>
          New: AI-Powered Tools Available
        </span>
        <h1 className="font-extrabold text-7xl">
          Supercharge Your <br />
          Digital Workflow
        </h1>
        <p className="text-[#627382]">
          Access premium AI tools, design assets, templates, and productivity
          <br></br>
          software—all in one place. Start creating faster today.<br></br>
          Explore Products
        </p>
        <div className="font-bold flex gap-3">
          <button className="px-4 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl cursor-pointer">
            Explore Products
          </button>
          <button className="px-4.5 py-3 text-[#4F39F6] rounded-4xl border border-[#4F39F6] flex items-center justify-center gap-2 cursor-pointer">
            <FaPlay></FaPlay>Watch Demo
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={image}></img>
      </div>
    </div>
  );
};

export default Hero;
