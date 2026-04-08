import React from "react";
import user from "../../assets/user.png";
import rocket from "../../assets/rocket.png";
import packageimg from "../../assets/package.png";
const GetStart = () => {
  return (
    <div className="bg-[#dddddd2b] pt-10">
      <div className="container mx-auto pb-10 ">
        <div className="text-center">
          <h1 className="font-bold text-2xl">Get Started in 3 Steps</h1>
          <p className="text-[#627382]">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="px-6 py-24 relative space-y-4 shadow-xl border rounded-2xl flex flex-col items-center bg-white">
            <p className="bg-[#9514FA] px-3 py-1.5 text-white top-3 right-3 rounded-full absolute">
              01
            </p>
            <div>
              <img
                className="border p-4 bg-[#9614fa3a] rounded-full"
                src={user}
              />
            </div>
            <h2 className="font-bold text-2xl">Create Account</h2>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card
              <br /> required to get started.
            </p>
          </div>
          <div className="px-6 py-24 relative space-y-4 shadow-xl border rounded-2xl flex flex-col items-center bg-white">
            <p className="bg-[#9514FA] px-3 py-1.5 text-white top-3 right-3 rounded-full absolute">
              02
            </p>
            <div>
              <img
                className="border p-4 bg-[#9614fa3a] rounded-full"
                src={packageimg}
              />
            </div>
            <h2 className="font-bold text-2xl">Choose Products</h2>
            <p>
              Browse our catalog and select the tools <br />
              that fit your needs.
            </p>
          </div>
          <div className="px-6 py-24 relative space-y-4 shadow-xl border rounded-2xl flex flex-col items-center bg-white">
            <p className="bg-[#9514FA] px-3 py-1.5 text-white top-3 right-3 rounded-full absolute ">
              03
            </p>
            <div>
              <img
                className="border p-4 bg-[#9614fa3a] rounded-full"
                src={rocket}
              />
            </div>
            <h2 className="font-bold text-2xl">Start Creating</h2>
            <p>
              Download and start using your premium <br></br>tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStart;
