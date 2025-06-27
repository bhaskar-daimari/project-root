// src/components/Auth/Signup.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully!");
        navigate("/signin");
      } else {
        alert(data.msg || "Signup failed!");
      }
    } catch {
      alert("Could not connect to server.");
    }
  };

  return (
    <div className="auth-container">
      <div className="main-content">
        <div className="form-container">
          <div className="branding">
            <h1 className="brand-title">miffyiffy_store</h1>
            <p className="brand-subtitle">create your account</p>
          </div>
          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-fields">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  required
                  className="form-input"
                />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  required
                  className="form-input"
                />
              </div>
            </div>
            <button type="submit" className="submit-button">
              Create Account
            </button>
            <div className="auth-link">
              <p className="auth-text">
                Already have an account?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => navigate("/signin")}
                >
                  Sign in
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}