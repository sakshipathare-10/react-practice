import { Routes, Route, Link, useParams } from "react-router-dom";

function User() {
  const { id } = useParams();
  return <p>User ID: {id}</p>;
}

export default function RoutingDemo() {
  return (
    <div>
      <h2>Routing Demo</h2>
      <Link to="user/101">Go to User 101</Link>
      <Routes>
        <Route path="user/:id" element={<User />} />
      </Routes>
    </div>
  );
}
