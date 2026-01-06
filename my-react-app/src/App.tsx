import { useState } from "react";
import Header from "./Header";

function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <Header title="React Vite TSX App" />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
 (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind CSS is Working 🚀
      </h1>
    </div>
  );


export default App;
