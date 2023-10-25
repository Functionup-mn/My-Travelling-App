import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className=" w-full h-12 flex items-center absolute z-10 justify-between text-white bg-black bg-opacity-50 scroll:fixed">
      <div className="hidden sm:flex">
        <ul className=" flex cursor-pointer">
          <li>
            {" "}
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Gallery
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="details"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Deatils
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-6 mx-4 cursor-pointer">
        <FaFacebookF />
        <FaTwitter />
        <FaGooglePlusG />
        <FaInstagram />
      </div>

      <div
        className="mr-4 cursor-pointer z-10 sm:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      {/* Mobile Menu*/}
      <div
        className={
          nav
            ? `md:hidden absolute ease-in duration-500 left-0 top-0 overflow-y-hidden w-full h-screen bg-black/90 text-gray-300 px-4 py-7`
            : `absolute top-0 left-[-100%] duration-500 ease-in`
        }
      >
        <ul className=" flex flex-col items-center justify-center">
          <li className=" text-2xl cursor-pointer">
            <Link to="hero" spy={true} smooth={true} offset={50} duration={500}>
              Home
            </Link>
          </li>
          <li className=" text-2xl cursor-pointer">
            <Link
              to="gallery"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Gallery
            </Link>
          </li>
          <li className=" text-2xl cursor-pointer">
            <Link
              to="details"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Deatils
            </Link>
          </li>
          <li className=" text-2xl cursor-pointer">
            {" "}
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
