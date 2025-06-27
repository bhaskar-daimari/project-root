// src/components/OtherPages/ProductDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();

  // TODO: fetch product details by id or use static data

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Product Detail Page</h2>
      <p>Showing details for product id: <strong>{id}</strong></p>
      {/* Add product details here */}
    </div>
  );
}