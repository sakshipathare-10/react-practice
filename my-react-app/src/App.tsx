import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Toggle from "./pages/Toggle";
import Todo from "./pages/Todo";
import PropsDemo from "./pages/PropsDemo";



import UseEffectDemo from "./pages/UseEffectDemo";
import LiftingState from "./pages/LiftingState";
import RoutingDemo from "./pages/RoutingDemo";
import ContextDemo from "./pages/ContextDemo";
import FormValidation from "./pages/FormValidation";
import UseRefDemo from "./pages/UseRefDemo";

function App() {
   // Nav style
  const navStyle: React.CSSProperties = {
    display: "flex",
    gap: "15px",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#e0f7e9", // light green
    color: "#006400",           // dark green text
    fontWeight: "bold",
  };

  // Page content style
  const pageStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "80vh",
    gap: "15px",
    backgroundColor: "#ffe5e5", // light red
    color: "#8b0000",           // dark red text
    padding: "20px",
    borderRadius: "10px",
    margin: "20px",
    textAlign: "center",
  };

  // Link style
  const linkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "#006400",
    padding: "8px 12px",
    border: "1px solid #006400",
    borderRadius: "5px",
  };

  return (
  <BrowserRouter>
    {/* NAVIGATION BAR */}
    <nav style={navStyle}>
      <Link style={linkStyle} to="/useeffect">useEffect</Link>
      <Link style={linkStyle} to="/lifting">Lifting State</Link>
      <Link style={linkStyle} to="/routing">Routing</Link>
      <Link style={linkStyle} to="/context">Context</Link>
      <Link style={linkStyle} to="/form">Form</Link>
      <Link style={linkStyle} to="/useref">useRef</Link>
      <Link style={linkStyle} to="/props">Props</Link>

    </nav>

    {/* PAGE CONTENT */}
    <div style={pageStyle}>
      <Routes>
        <Route path="/useeffect" element={<UseEffectDemo />} />
        <Route path="/lifting" element={<LiftingState />} />
        <Route path="/routing" element={<RoutingDemo />} />
        <Route path="/context" element={<ContextDemo />} />
        <Route path="/form" element={<FormValidation />} />
        <Route path="/useref" element={<UseRefDemo />} />
        <Route path="/props" element={<PropsDemo />} />

      </Routes>
    </div>
  </BrowserRouter>
);

}

export default App;
