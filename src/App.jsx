import ProjectProvider from "./store/context-api";
import AppContent from "./components/AppContent";

function App() {
  return (
    <ProjectProvider>
      <AppContent />
    </ProjectProvider>
  );
}

export default App;
