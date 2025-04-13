import React from "react";
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constant";
function About() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="bg-gradient-to-r from-blue-400 via-slate-800 to-purple-600 bg-clip-text tracking-tight text-transparent ml-2">
          Me
        </span>
      </h1>
      <div className="flex flex-wrap">
        <div
          className="w-full lg:w-1/2 lg:p-7
      "
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl " src={aboutImg} alt="" />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">{ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
