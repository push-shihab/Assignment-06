import React from "react";

const Trial = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="container mx-auto py-30 text-white text-center space-y-5">
        <h1 className="font-extrabold text-5xl">
          Ready to Transform Your Workflow?
        </h1>
        <p>
          Join thousands of professionals who are already using Digitools to
          work smarter.
          <br />
          Start your free trial today.
        </p>
        <div className="flex gap-3 justify-center">
          <button className="btn font-semibold p-3 rounded-3xl bg-white">
            Explore Products
          </button>
          <button className="btn font-semibold p-3 rounded-3xl bg-transparent text-white">
            View Pricing
          </button>
        </div>
        <p>14-day free trial • No credit card required • Cancel anytime</p>
      </div>
    </div>
  );
};

export default Trial;
