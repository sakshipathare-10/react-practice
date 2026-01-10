import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useAuth(); // get global auth state

  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#e0f7fa",
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Main Pages */}
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
      <Link to="/book">Book (Axios)</Link>
      <Link to="/tailwind">Tailwind Practice</Link>

      {/* React Concepts */}
      <Link to="/usestate">useState</Link>
      <Link to="/useeffect">useEffect</Link>
      <Link to="/props">Props</Link>
      <Link to="/context">Context</Link>
      <Link to="/useref">useRef</Link>
      <Link to="/form">Form</Link>
      <Link to="/todo">Todo</Link>

      {/* Auth Section */}
      {!user ? (
        <Link to="/login">Login</Link>
      ) : (
        <>
          <span style={{ fontWeight: "bold" }}>
            👤 {user}
          </span>
          <button
            onClick={logout}
            style={{
              padding: "5px 10px",
              border: "none",
              backgroundColor: "#ff5252",
              color: "white",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            Logout
          </button>
        </>
      )}
    </nav>
  );
}

export default Navbar;
