// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import ProductPage from "./components/OtherPages/ProductPage";
import Cart from "./components/OtherPages/Cart";
import Navbar from "./components/Home/Navbar";
import Home from "./Home";
import Signin from "./components/Auth/Signin";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/OtherPages/Dashboard";
import Profile from "./components/OtherPages/Profile";
// import ProductDetail from "./components/OtherPages/ProductDetail";
// import CategoryPage from "./components/OtherPages/CategoryPage";
import PrivateRoute from "./components/Auth/PrivateRoute";

// Import your product detail pages (Kpages)
import Kpage1 from "./pages/Page1/Kpage1";
import Kpage2 from "./pages/Page2/Kpage2";
import Kpage3 from "./pages/Page3/Kpage3";
import Kpage4 from "./pages/Page4/Kpage4";
import Kpage5 from "./pages/Page5/Kpage5";
import Kpage6 from "./pages/Page6/Kpage6";
import Kpage7 from "./pages/Page7/Kpage7";
// import Kpage8 from "./pages/Page8/Kpage8";
import Kpage9 from "./pages/Page9/Kpage9";
import Kpage10 from "./pages/Page10/Kpage10";

// Category Pages
import Bagcharm from "./pages/Bagcharm/Bagcharm";
import Bouquet from "./pages/Bouquets/Bouquet";
import Phonecharm from "./pages/Phonecharm/Phonecharm";
import Keychain from "./pages/Keychains/Keychain";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductPage />} />

        {/* Category Pages */}
        <Route path="/categories/bouquet" element={<Bouquet />} />
        <Route path="/categories/phonecharm" element={<Phonecharm />} />
        <Route path="/categories/keychain" element={<Keychain />} />
        <Route path="/categories/bagcharm" element={<Bagcharm />} />

        {/* Keychain Product Pages */}
        <Route path="/categories/keychain/Capybara" element={<Kpage1 />} />
        <Route path="/categories/keychain/Pompompurin" element={<Kpage2 />} />
        <Route path="/categories/keychain/crochetcat" element={<Kpage3 />} />
        <Route path="/categories/keychain/Frog" element={<Kpage4 />} />
        <Route path="/categories/keychain/Tata" element={<Kpage5 />} />
        <Route path="/categories/keychain/Miffy" element={<Kpage6 />} />
        <Route path="/categories/keychain/Piggy" element={<Kpage7 />} />
        {/* <Route path="/categories/keychain/StrawberryPiggy" element={<Kpage8 />} /> */}
        <Route path="/categories/keychain/Duck" element={<Kpage9 />} />
        <Route path="/categories/keychain/MiniBouquet" element={<Kpage10 />} />

        {/* Private Routes */}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
}
