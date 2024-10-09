import React, { useState } from "react";
import "../styling/App.css";
import "../styling/Login.css"; // Make sure to import your custom styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-input" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="form-input" />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      <p className="signup-prompt">
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
};

export default Login;
