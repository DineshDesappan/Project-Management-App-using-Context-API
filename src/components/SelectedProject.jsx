import React, { useContext } from "react";
import Tasks from "./Tasks";
import { ProjectContext } from "../store/context-api";

function SelectedProject() {
  const { tasks, project, projectId, deleteProject } =
    useContext(ProjectContext);

  const selectedProject = project.find((proj) => proj.id === projectId);

  if (!selectedProject) {
    return null;
  }

  const formattedDate = new Date(selectedProject.dueDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
    }
  );

  return (
    <div className="w-140 mt-16 ">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">
            {selectedProject.title}
          </h1>
          <button
            onClick={deleteProject}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {selectedProject.description}
        </p>
      </header>
      <Tasks />
    </div>
  );
}

export default SelectedProject;
