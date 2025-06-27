
import React, { useState } from "react";
import "./LoginInfo.css"; // Optional: style it like the site

export default function LoginInfo() {
  const [email, setEmail] = useState("jilmil794@gmail.com");
  const [password, setPassword] = useState("password");
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Add API call or state update logic here
    alert("Login info updated!");
    setIsEditing(false);
  };

  return (
    <div className="login-info">
      <h2>Login info</h2>
      <p>View and update your login email and password.</p>

      <form onSubmit={handleSave} className="login-form">
        <div className="form-group">
          <label>Login email:</label>
          {isEditing ? (
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          ) : (
            <p>{email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password:</label>
          {isEditing ? (
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          ) : (
            <p>••••••••</p>
          )}
        </div>

        {isEditing ? (
          <div className="button-group">
            <button type="submit" className="btn-update">Update Info</button>
            <button
              type="button"
              className="btn-discard"
              onClick={() => setIsEditing(false)}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            type="button"
            className="btn-edit"
            onClick={() => setIsEditing(true)}
          >
            Change Email / Password
          </button>
        )}
      </form>
    </div>
  );
}
