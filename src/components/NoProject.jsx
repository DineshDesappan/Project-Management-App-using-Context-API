import React, { useContext } from "react";
import img from "../assets/no-projects.png";
import Button from "./Button";
import { ProjectContext } from "../store/context-api";

function NoProject() {
  const { createProject } = useContext(ProjectContext);
  return (
    <div className="m-24 w-2/3 text-center">
      <img
        src={img}
        alt="Projrct Image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-stone-500 font-bold my-4 text-xl">
        No project selected
      </h2>
      <p className="font-bold text-stone-500 my-4 ">
        Please select or create a new one
      </p>
      <div className="mt-8">
        <Button onClick={createProject}>Create Project</Button>
      </div>
    </div>
  );
}

export default NoProject;
