import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#e0f7fa",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/book">Book (Axios)</Link>
<Link to="/tailwind">Tailwind Practice</Link>

      <Link to="/usestate">useState</Link>
      <Link to="/useeffect">useEffect</Link>
      <Link to="/props">Props</Link>
      <Link to="/context">Context</Link>
      <Link to="/useref">useRef</Link>
      <Link to="/form">Form</Link>
      <Link to="/todo">Todo</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}

export default Navbar;

