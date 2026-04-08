import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#101727]">
      <div className="container mx-auto py-30 text-white">
        <div className="grid grid-cols-5 gap-4 pb-20">
          <div>
            <h1 className="text-4xl font-extrabold pb-3">DigiTools</h1>
            <p className="text-[#ddddddd1]">
              Premium digital tools for creators,
              <br /> professionals, and businesses. Work smarter
              <br /> with our suite of powerful tools.
            </p>
          </div>
          <div>
            <h3 className="font-medium text-2xl pb-2">Product</h3>
            <ul className="text-[#ddddddd1] space-y-2">
              <li>
                <a className="cursor-pointer">Features</a>
              </li>
              <li>
                <a className="cursor-pointer">Pricing</a>
              </li>
              <li>
                <a className="cursor-pointer">Templates</a>
              </li>
              <li>
                <a className="cursor-pointer">Integrations</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl pb-2">Company</h3>
            <ul className="text-[#ddddddd1] space-y-2">
              <li>
                <a className="cursor-pointer">About</a>
              </li>
              <li>
                <a className="cursor-pointer">Blog</a>
              </li>
              <li>
                <a className="cursor-pointer">Careers</a>
              </li>
              <li>
                <a className="cursor-pointer">Press</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl pb-2">Resources</h3>
            <ul className="text-[#ddddddd1] space-y-2">
              <li>
                <a className="cursor-pointer">Documentation</a>
              </li>
              <li>
                <a className="cursor-pointer">Help Center</a>
              </li>
              <li>
                <a className="cursor-pointer">Community</a>
              </li>
              <li>
                <a className="cursor-pointer">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-2xl pb-2">Social Links</h3>
            <ul className="space-y-2 flex items-center text-black gap-2">
              <li className="p-2.5 bg-white rounded-full cursor-pointer">
                <a>
                  <FaFacebook></FaFacebook>
                </a>
              </li>
              <li className="p-2.5 bg-white rounded-full cursor-pointer">
                <a>
                  <FaInstagram></FaInstagram>
                </a>
              </li>
              <li className="p-2.5 bg-white rounded-full cursor-pointer">
                <a>
                  <FaTwitter></FaTwitter>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="divider divider-neutral"></div>
        <div className="text-[#dddddd7d] flex items-center justify-between">
          <div>© 2026 Digitools. All rights reserved.</div>
          <div>
            <ul className="flex items-center gap-4">
              <li>
                <a className="cursor-pointer">Privacy Policy</a>
              </li>
              <li>
                <a className="cursor-pointer">Terms of Service</a>
              </li>
              <li>
                <a className="cursor-pointer">Cookies</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
