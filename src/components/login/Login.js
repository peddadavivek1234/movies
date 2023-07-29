// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.name === credentials.name &&
      storedUser.password === credentials.password
    ) {
      // Credentials matched, navigate to the MovieList page
      navigate("/movies");
    } else {
      // Show "Invalid Credentials" message to the user
      alert("Invalid Credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={credentials.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={credentials.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
