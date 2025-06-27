// src/components/Home/Hero.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

import bagcharm2 from '../../assets/bagcharm2.jpg';
import crochetcat from '../../assets/crochetcat.jpg';
import bracelet1 from '../../assets/bracelet1.jpg';

const products = [
  { img: bagcharm2, label: 'Bag charm', id: 'bagcharm' },
  { img: crochetcat, label: 'Crochet cat', id: 'crochetcat' },
  { img: bracelet1, label: 'Bracelet', id: 'bracelet' },
  { img: bagcharm2, label: 'Bag charm 2', id: 'bagcharm2' },
  { img: crochetcat, label: 'Cat 2', id: 'cat2' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length);
  };

  const getVisibleItems = () => {
    const visible = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(products[(current + i) % products.length]);
    }
    return visible;
  };

  const visibleItems = getVisibleItems();

  return (
    <section className="hero">
      <h2 className="hero-title">Featured Products</h2>
      <div className="slider-container">
        <button className="nav-button" onClick={prevSlide}>&lt;</button>
        <div className="slider">
          {visibleItems.map((product, index) => (
            <Link
              key={index}
              to={`/products/${product.id}`} // Link to product detail page
              className={`slide ${index === 1 ? 'active' : ''}`}
            >
              <img src={product.img} alt={product.label} />
              <p>{product.label}</p>
            </Link>
          ))}
        </div>
        <button className="nav-button" onClick={nextSlide}>&gt;</button>
      </div>
    </section>
  );
}