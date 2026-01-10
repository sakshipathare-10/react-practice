import { useAuth } from "../context/AuthContext";

function Profile() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Welcome, {user}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Profile;
