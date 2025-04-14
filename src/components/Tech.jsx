import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { animate, motion } from "framer-motion";
const icons = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});
function Tech() {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Tech Stack
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ x: -100, opacity: 0 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={icons(1)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={icons(1.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <SiExpress className="text-7xl text-slate-800" />
        </motion.div>{" "}
        <motion.div
          variants={icons(2)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <RiReactjsLine className="text-7xl text-cyan-500" />
        </motion.div>{" "}
        <motion.div
          variants={icons(2.5)}
          initial="initail"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 "
        >
          <FaNodeJs className="text-7xl text-yellow-500" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Tech;
