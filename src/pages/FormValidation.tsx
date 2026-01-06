import { useState } from "react";

export default function FormValidation() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) alert("Invalid email");
    else alert(`Email submitted: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Form Validation</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

