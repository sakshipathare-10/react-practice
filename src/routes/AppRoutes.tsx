import { Routes, Route } from "react-router-dom";
import Students from "../pages/Students"; // ✅ correct relative path

function AppRoutes() {
  return (
    <Routes>
      {/* Default route */}
      <Route path="/" element={<Students />} />

      {/* Students route */}
      <Route path="/students" element={<Students />} />
    </Routes>
  );
}

export default AppRoutes;
