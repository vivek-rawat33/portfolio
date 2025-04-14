import React from "react";
import { HERO_CONTENT } from "../constant";
import profilePic from "../assets/kevinRushProfile.png";
import { motion } from "framer-motion";
function Hero() {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-34">
      <div className="flex flex-wrap ">
        <div className="w-full lg:w-1/2 lg:pl-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              animate={{ x: 100, duration: 1 }}
              className="pb-16 text-6xl font-thin tracking-tight lg: mt-15 lg:text-8xl"
            >
              Vivek Singh Rawat
            </motion.h1>
            <span className="bg-gradient-to-r from-pink-400 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              MERN Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-6">
          <div className="flex justify-center">
            <img src={profilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
