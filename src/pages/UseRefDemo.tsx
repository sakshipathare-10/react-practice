import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => inputRef.current?.focus();

  return (
    <div>
      <h2>useRef Demo</h2>
      <input ref={inputRef} placeholder="Focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}
