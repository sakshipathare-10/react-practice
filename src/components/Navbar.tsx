import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "15px", display: "flex", gap: "15px" }}>
      <Link to="/">Home</Link>
      <Link to="/students">Students</Link>
    </nav>
  );
};

export default Navbar;
