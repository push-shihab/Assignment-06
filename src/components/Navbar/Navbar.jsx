import React from "react";
import digitools from "../../assets/DigiTools.png";
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="border border-gray-300">
      <div className="container mx-auto">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
              >
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a> Feartures</a>
                </li>
                <li>
                  <a>Pricing</a>
                </li>
                <li>
                  <a>Testimonials</a>
                </li>
                <li>
                  <a>FAQ</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-link">
              <img src={digitools} />
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 text-black font-semibold">
              <li>
                <a>Products</a>
              </li>
              <li>
                <a>Feartures</a>
              </li>
              <li>
                <a>Pricing</a>
              </li>
              <li>
                <a>Testimonials</a>
              </li>
              <li>
                <a>FAQ</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end font-semibold flex gap-4">
            <a className="cursor-pointer">
              <CiShoppingCart></CiShoppingCart>
            </a>
            <a className="cursor-pointer">Login</a>
            <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
