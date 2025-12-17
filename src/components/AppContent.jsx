import { useContext } from "react";
import NewProject from "./NewProject";
import NoProject from "./NoProject";
import SideBar from "./SideBar";
import SelectedProject from "./SelectedProject";
import { ProjectContext } from "../store/context-api";

function AppContent() {
  const { projectId } = useContext(ProjectContext);

  let content = <SelectedProject />;

  if (projectId === null) {
    content = <NewProject />;
  } else if (projectId === undefined) {
    content = <NoProject />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar />
      {content}
    </main>
  );
}

export default AppContent;
