import { useState } from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-80 text-center space-y-4">
        <h2 className="text-2xl font-bold">Toggle Page</h2>

        {/* Toggle Switch */}
        <div
          onClick={() => setIsOn(!isOn)}
          className={`w-14 h-7 flex items-center rounded-full p-1 cursor-pointer transition
            ${isOn ? "bg-green-500" : "bg-gray-400"}`}
        >
          <div
            className={`bg-white w-5 h-5 rounded-full shadow transform transition
              ${isOn ? "translate-x-7" : "translate-x-0"}`}
          ></div>
        </div>

        <p className="text-gray-600">
          Status: <b>{isOn ? "ON" : "OFF"}</b>
        </p>
      </div>
    </div>
  );
}

export default Toggle;
