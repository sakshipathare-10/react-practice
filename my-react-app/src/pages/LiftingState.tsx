import { useState } from "react";

function Child({ value }: { value: number }) {
  return <p>Child sees: {value}</p>;
}

export default function LiftingState() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <h2>Lifting State</h2>
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <Child value={value} />
    </div>
  );
}
