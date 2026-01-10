import { Routes, Route } from "react-router-dom";

import Students from "../pages/Students"; // ✅ correct relative path
import Book from "../pages/Book";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Todo from "../pages/Todo";
import Toggle from "../pages/Toggle";
import PropsDemo from "../pages/PropsDemo";
import UseStateDemo from "../pages/UseStateDemo";
import UseEffectDemo from "../pages/UseEffectDemo";
import LiftingState from "../pages/LiftingState";
import RoutingDemo from "../pages/RoutingDemo";
import ContextDemo from "../pages/ContextDemo";
import FormValidation from "../pages/FormValidation";
import UseRefDemo from "../pages/UseRefDemo";
import FetchUsers from "../components/FetchUsers";
import TailwindPractice from "../pages/TailwindPractice";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/useeffect" element={<UseEffectDemo />} />
      <Route path="/usestate" element={<UseStateDemo />} />
      <Route path="/lifting" element={<LiftingState />} />
      <Route path="/routing" element={<RoutingDemo />} />
      <Route path="/context" element={<ContextDemo />} />
      <Route path="/form" element={<FormValidation />} />
      <Route path="/useref" element={<UseRefDemo />} />
      <Route path="/props" element={<PropsDemo />} />
      <Route path="/todo" element={<Todo />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
      <Route path="/fetch" element={<FetchUsers />} />
      <Route path="/" element={<Students />} />
      <Route path="/tailwind" element={<TailwindPractice />} />


      {/* Students route */}
      <Route path="/students" element={<Students />} />
      <Route path="/book" element={<Book />} />
    </Routes>
  );
}

export default AppRoutes;
