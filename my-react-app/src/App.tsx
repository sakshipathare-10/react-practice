import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Toggle from "./pages/Toggle";

function App() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav className="flex justify-center gap-6 p-4 bg-white shadow">
        <Link to="/" className="text-blue-600 font-medium">
          Login
        </Link>
        <Link to="/toggle" className="text-blue-600 font-medium">
          Toggle
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/toggle" element={<Toggle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
