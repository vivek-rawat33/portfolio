import React from "react";
import { PROJECTS } from "../constant";

function Project() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => {
          <div key={index} className="mb-8 flex fkex-wrap lg:justify-center ">
            <div className="w-full lg:w-1/4"></div>
            <img
              src={project.image}
              alt={project.title}
              width={150}
              height={150}
              className="mb-6 rounded"
            />
          </div>;
          <div className="w-full max-w-xl"></div>;
        })}
      </div>
    </div>
  );
}

export default Project;
