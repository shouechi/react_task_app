import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import TaskListPage from "./pages/tasks/taskListPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/tasks" element={<TaskListPage />} />
    </Routes>
  )
}

export default App
