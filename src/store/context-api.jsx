import { createContext, useState } from "react";

export const ProjectContext = createContext({
  createProject: () => {},
  deleteProject: () => {},
  addTask: () => {},
  deleteTask: () => {},
  project: [],
  task: [],
  projectId: undefined,
  selectedProject: () => {},
  cancelProject: () => {},
  addProject: () => {},
});

export default function ProjectProvider({ children }) {
  const [projectState, setProjectState] = useState({
    projectId: undefined,
    project: [],
    task: [],
  });

  function handleCreateProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: null,
      };
    });
  }

  function handleSelectedProject(projectId) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: projectId,
      };
    });
  }
  function handleCancelProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: undefined,
      };
    });
  }
  function handleAddProject(projectData) {
    setProjectState((prevProject) => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      };
      return {
        ...prevProject,
        projectId: undefined,
        project: [...projectState.project, newProject],
      };
    });
  }

  function handleDeleteProject() {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        projectId: undefined,
        project: prevProject.project.filter(
          (project) => project.id !== prevProject.projectId
        ),
      };
    });
  }

  function addTask(text) {
    setProjectState((prevProject) => {
      const newTask = {
        text: text,
        projectId: prevProject.projectId,
        id: Math.random(),
      };
      return {
        ...prevProject,
        task: [...prevProject.task, newTask],
      };
    });
  }
  function deleteTask(id) {
    setProjectState((prevProject) => {
      return {
        ...prevProject,
        task: prevProject.task.filter((task) => task.id !== id),
      };
    });
  }

  return (
    <ProjectContext.Provider
      value={{
        projectId: projectState.projectId,
        project: projectState.project,
        tasks: projectState.task,
        createProject: handleCreateProject,
        selectedProject: handleSelectedProject,
        cancelProject: handleCancelProject,
        addProject: handleAddProject,
        deleteProject: handleDeleteProject,
        addTask: addTask,
        deleteTask: deleteTask,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
}
