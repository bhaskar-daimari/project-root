// src/components/Home/Navbar.jsx
import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

import pink_cart from "../../assets/pink-cart.jpg";
import pink_pfp from "../../assets/pink-pfp.jpg";
import menu_icon from "../../assets/menuicon.png";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/signin");
    }
  };

  const handleCartClick = () => {
    if (user) {
      navigate("/cart");
    } else {
      navigate("/signin");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="container">
      <div id="menuicon">
        <img src={menu_icon} alt="menu" />
      </div>

      <div className="search-bar">
        <input type="text" placeholder="Search" />
      </div>

      <div className="nav-icons">
        <img
          src={pink_pfp}
          alt="profile"
          onClick={handleProfileClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src={pink_cart}
          alt="cart"
          onClick={handleCartClick}
          style={{ cursor: "pointer" }}
        />
        {user && (
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        )}
      </div>
    </nav>
  );
}
