// src/Home.jsx
import React from 'react';
import Header from './components/Home/Header';
import Hero from './components/Home/Hero';
import Products from './components/Home/Products';
import About from './components/Home/About';
import Footer from './components/Home/Footer';

import './Home.css';  // optional styling for Home.jsx

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  );
}