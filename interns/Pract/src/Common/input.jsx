import React, { useState } from "react";

export default function Input() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  const handleUsername = (e) => {
    const value = e.target.value;

    if (/^[A-Za-z]*$/.test(value)) {
      setUsername(value);
    }
  };

  return (
    <div className="input-container">

  
      <label>Username :</label>
      <input
        type="text"
        value={username}
        onChange={handleUsername}
        placeholder="Enter your username"
      />

      <br /><br />

  
      <label>Password :</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Create a strong password"
        pattern="(?=.*\d)(?=.*[A-Z]).{8,}"
        
      />

    </div>
  );
}