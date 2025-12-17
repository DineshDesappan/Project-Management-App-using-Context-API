import React, { useContext } from "react";
import Button from "./Button";
import { ProjectContext } from "../store/context-api";

function SideBar() {
  const { createProject, selectedProject, project, projectId } =
    useContext(ProjectContext);
  return (
    <aside className="w-1/3 px-8 py-16 bg-black text-stone-50 rounded-r-xl md:w-72">
      <h2 className="mb-8 font-bold md:text-xl text-stone-200 uppercase">
        Your Projects
      </h2>
      <div>
        <Button onClick={createProject}> + Add Project</Button>
      </div>
      <ul className="my-8">
        {project.map((proj) => {
          let cssClasses =
            "w-full px-2 py-1 text-left text-stone-400 hover:text-stone-200 hover:bg-stone-800 rounded-sm my-1";

          if (proj.id === projectId) {
            cssClasses += " bg-stone-700 text-stone-400";
          } else {
            cssClasses += " bg-stone-950 ";
          }

          return (
            <li key={proj.id}>
              <button
                onClick={() => selectedProject(proj.id)}
                className={cssClasses}
              >
                {proj.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
