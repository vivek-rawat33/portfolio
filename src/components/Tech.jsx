import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";

function Tech() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h1 className="my-20 text-center text-4xl">Tech Stack</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiMongodb className="text-7xl text-green-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <SiExpress className="text-7xl text-slate-800" />
        </div>{" "}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </div>{" "}
        <div className="rounded-2xl border-4 border-neutral-800 p-4 ">
          <FaNodeJs className="text-7xl text-yellow-500" />
        </div>
      </div>
    </div>
  );
}

export default Tech;
