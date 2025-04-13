import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <div className="mb-18 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center-safe">
        <img className="mx-2 w-10 " src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center text-2xl gap-4">
        <FaGithub />
        <FaLinkedin />
        <FaTwitter />
      </div>
    </div>
  );
}

export default Navbar;
