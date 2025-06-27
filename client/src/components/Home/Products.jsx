// src/components/Home/Products.jsx
import React from 'react';
import { Link } from "react-router-dom";
import bouquet from '../../assets/bouquet.jpg';
import phonecharm1 from '../../assets/phonecharm1.jpg';
import frog from '../../assets/frog.jpg';
import bracelet2 from '../../assets/bracelet2.jpg';
import neckchain1 from '../../assets/neckchain1.jpg';
import bagcharm from '../../assets/bagcharm.jpg';
import './Products.css';

const products = [
  { name: "bouquet", img: bouquet, id: "bouquet", categoryId: "bouquet" },
  { name: "phonecharm", img: phonecharm1, id:"phonecharm", categoryId: "phonecharm" },
  { name: "keychain", img: frog, id: "keychain", categoryId: "keychain" },
  { name: "bracelet", img: bracelet2, id: "bracelet", categoryId: "bracelet" },
  { name: "neckchain", img: neckchain1, id: "neckchain", categoryId: "neckchain" },
  { name: "bagcharm", img: bagcharm, id:"bagcharm", categoryId: "bagcharm" }
];

export default function Products() {
  return (
    <section className="products">
      <h2>Products</h2>
      <div className="product-grid">
        {products.map((product, i) => (
          <Link
            to={`/categories/${product.categoryId}`}  // Link to category page
            key={i}
            className="product-card"
          >
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}