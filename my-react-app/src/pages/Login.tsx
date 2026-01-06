import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isOn, setIsOn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-80 space-y-4"
      >
        {/* Title */}
        <h2 className="text-2xl font-bold text-center">
          Login
        </h2>

        {/* Toggle */}
        <div className="flex flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => setIsOn(!isOn)}
            className="w-full border py-1 rounded"
          >
            {isOn ? "ON" : "OFF"}
          </button>
          <span className="text-sm text-gray-600">
            Status: {isOn ? "Enabled" : "Disabled"}
          </span>
        </div>

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-black py-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default App;
