import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import WorkoutLog from "./pages/WorkoutLog.jsx";
import ProgressTracking from "./pages/ProgressTracking.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/workout-log" element={<WorkoutLog />} />
      <Route path="/progress-tracking" element={<ProgressTracking />} />
      </Routes>
    </Router>
  );
}

export default App;
