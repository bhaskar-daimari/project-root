// src/components/Auth/Signin.jsx
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Auth.css";

export default function Signin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        login(data.user, data.token);
        alert("Signed in successfully!");
        navigate("/");
      } else {
        alert(data.msg || "Signin failed!");
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
            <p className="brand-subtitle">sign in to your account</p>
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
            </div>
            <button type="submit" className="submit-button">
              Sign in
            </button>
            <div className="auth-link">
              <p className="auth-text">
                Don't have an account?{" "}
                <button
                  type="button"
                  className="link-button"
                  onClick={() => navigate("/signup")}
                >
                  Create account
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
