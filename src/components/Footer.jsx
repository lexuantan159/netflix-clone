import React from "react";
import { ImFacebook } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";
import { BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <div className="w-full mt-12">
        <div className="max-w-[900px] mx-auto">
          <div className="text-white flex justify-start text-3xl py-3 w-full ">
            <ImFacebook className="mr-7 pl-3" />
            <GrInstagram className="mr-7 pl-3" />
            <BsTwitter className="mr-7 pl-3" />
            <BsYoutube className="mr-7 pl-3" />
          </div>
          <ul className="grid md:grid-cols-4  sm:grid-cols-3 pl-3 grid-cols-2 gap-x-3 gap-y-2 text-gray-400 pb-5 w-full text-[14px]">
            <li>
              <a href="/" className=" hover:underline">
                Help Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Account
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Jobs
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Redeem Gift Cards
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Media Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Terms Of Use
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Privacy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Cookie Preferences{" "}
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
