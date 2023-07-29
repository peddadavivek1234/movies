// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    email: "",
    phone: "",
    profession: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    // You can add validation and error handling here if required
    // For simplicity, this example stores the data without validation

    // After successful signup, navigate to the login page
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>User Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <select
          name="profession"
          value={formData.profession}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Profession
          </option>
          <option value="Engineer">Engineer</option>
          <option value="Doctor">Doctor</option>
          <option value="Teacher">Teacher</option>
          {/* Add more options as needed */}
        </select>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
