import { createContext, useContext } from "react";

const ThemeContext = createContext("light");

export default function ContextDemo() {
  const theme = useContext(ThemeContext);
  return <p>Current Theme: {theme}</p>;
}
