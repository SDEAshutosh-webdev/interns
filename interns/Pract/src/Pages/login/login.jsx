import React, { useState } from "react";
import "./login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (username === "admin" && password === "12345") {
      alert("Login Successful!");
      
    } else {
      alert("Invalid Username or Password!");
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>

      <div className="input-box">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-box">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button onClick={login}>Login</button>

      <p>
        Username: <b>admin</b>
        <br />
        Password: <b>12345</b>
      </p>
    </div>
  );
}

export default Login;
