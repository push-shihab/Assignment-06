import React from "react";

const About = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-50 py-15 md:flex flex-wrap justify-center items-center gap-20">
      <div>
        <h2 className="font-extrabold text-6xl">50K+</h2>
        <p className="font-medium text-2xl">Active Users</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div>
        <h2 className="font-extrabold text-6xl">200+</h2>
        <p className="font-medium text-2xl">Premium Tools</p>
      </div>
      <div className="divider divider-horizontal"></div>
      <div>
        <h2 className="font-extrabold text-6xl">4.9</h2>
        <p className="font-medium text-2xl">Rating</p>
      </div>
    </div>
  );
};

export default About;
