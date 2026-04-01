import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};

    if (!name) tempErrors.name = "Name is required";
    if (!email) tempErrors.email = "Email is required";
    else if (!email.includes("@")) tempErrors.email = "Invalid email";

    if (!password) tempErrors.password = "Password is required";

    return tempErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully");

      // Reset
      setName("");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <h2>Form Validation</h2>

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <p style={{color:"red"}}>{errors.name}</p>

        <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p style={{color:"red"}}>{errors.email}</p>

        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p style={{color:"red"}}>{errors.password}</p>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;