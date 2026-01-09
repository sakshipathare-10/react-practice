import { Routes, Route } from "react-router-dom";
import Students from "../pages/Students";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/students" element={<Students />} />
    </Routes>
  );
};

export default AppRoutes;
