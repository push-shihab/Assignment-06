import React from "react";
import { TiTickOutline } from "react-icons/ti";

const Pricing = () => {
  return (
    <div className="container mx-auto text-center py-20">
      <h1 className="font-extrabold text-5xl pb-3">
        Simple, Transparent Pricing
      </h1>
      <p className="text-[#627382]">
        Choose the plan that fits your needs. Upgrade or downgrade anytime.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 pt-10">
        <div className="border shadow-xl rounded-2xl flex flex-col items-start p-6 bg-white space-y-3">
          <h3 className="font-bold text-2xl">Starter</h3>
          <p className="text-[#627382]">Perfect for getting started</p>
          <p>
            <span className="font-bold text-4xl">$0</span>
            <span className="text-2xl text-[#627382]">/month</span>
          </p>
          <div className="flex flex-col items-start space-y-3 h-full">
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Access to 10 free tools</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Basic templates</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Community support</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">1 project per month</span>
            </p>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl w-full">
            Get Started Free
          </button>
        </div>
        <div className="border shadow-xl rounded-2xl flex flex-col items-start p-6 bg-violet-200 space-y-3 relative">
          <span className="absolute text-xl text-white p-3 rounded-3xl -top-6 shadow-amber-200 shadow-2xl lg:right-20 md:right-27 sm:right-60 right-34 xl:right-32 2xl:right-42 bg-green-800">
            Most Popular
          </span>
          <h3 className="font-bold text-2xl">Pro</h3>
          <p className="text-[#627382]">Best for professionals</p>
          <p>
            <span className="font-bold text-4xl">$29</span>
            <span className="text-2xl text-[#627382]">/month</span>
          </p>
          <div className="flex flex-col items-start space-y-3 h-full">
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">
                Access to all premium tools
              </span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Unlimited templates</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Priority support</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Unlimited projects</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Cloud sync</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Advanced analytics</span>
            </p>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl w-full">
            Get Started Free
          </button>
        </div>
        <div className="border shadow-xl rounded-2xl flex flex-col items-start p-6 bg-white space-y-3">
          <h3 className="font-bold text-2xl">Enterprise</h3>
          <p className="text-[#627382]">For teams and businesses</p>
          <p>
            <span className="font-bold text-4xl">$99</span>
            <span className="text-2xl text-[#627382]">/month</span>
          </p>
          <div className="flex flex-col items-start space-y-3 h-full">
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Everything in Pro</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Team collaboration</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Custom integrations</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Dedicated support</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">SLA guarantee</span>
            </p>
            <p className="flex justify-center items-center gap-2">
              <TiTickOutline className="text-green-800"></TiTickOutline>
              <span className="text-[#627382]">Custom branding</span>
            </p>
          </div>
          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl w-full">
            Get Started Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
