import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <BrowserRouter>
      <Navbar />   {/* ✅ Navbar ALWAYS here */}
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
