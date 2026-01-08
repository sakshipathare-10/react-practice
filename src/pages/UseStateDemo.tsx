import { useState } from "react";

function UseStateDemo() {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h2>useState Counter Example</h2>

      <p>Current Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </>
  );
}

export default UseStateDemo;
