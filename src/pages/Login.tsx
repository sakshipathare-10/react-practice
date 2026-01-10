import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Handle login
  const handleLogin = () => {
    login(name);          // Set user in context
    navigate("/profile"); // Redirect after login
  };

  return (
    <div>
      <h2>Login Page</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
