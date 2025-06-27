// src/components/Home/Navbar.jsx
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Navbar.css";

import pink_cart from "../../assets/pink-cart.jpg";
import pink_pfp from "../../assets/pink-pfp.jpg";
import menu_icon from "../../assets/menuicon.png";

export default function NavBar() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

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
        {user ? (
          <>
            {/* Profile icon REMOVED here for logged-in users */}
            {/* <Link to="/profile">
              <img src={pink_pfp} alt="profile" />
            </Link> */}
            <Link to="/cart">
              <img src={pink_cart} alt="cart" />
            </Link>
            <button onClick={handleLogout} className="logout-button">
              Logout
            </button>
          </>
        ) : (
          <>
            {/* Show profile icon for NOT logged in users */}
            <Link to="/signin">
              <img src={pink_pfp} alt="profile" />
            </Link>
            <Link to="/signin">
              <img src={pink_cart} alt="cart" />
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
