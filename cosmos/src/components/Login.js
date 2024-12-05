import React, { useState } from "react";
import axios from "axios"; // Import axios for HTTP requests
import "./App.css";
import "./Login.css"; // Make sure to import your custom styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null); // For handling errors

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your login endpoint
      const response = await axios.post(
        "https://localhost:7172/api/authentication/login",
        {
          email: email,
          password: password,
        }
      );

      // If successful, response.data will have the token and other user info
      console.log("Login successful:", response.data);

      // Save the token in localStorage (or cookies) for further API requests
      localStorage.setItem("token", response.data.accessToken);

      // Redirect to another page or update state to show user is logged in
      // Example: redirect to a dashboard
      window.location.href = "/userInfo";
    } catch (error) {
      // Handle login failure
      console.error(
        "Login error:",
        error.response?.data?.message || error.message
      );
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="form-input"
          />
        </div>
        {error && <p className="error-message">{error}</p>}{" "}
        {/* Display error message */}
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
