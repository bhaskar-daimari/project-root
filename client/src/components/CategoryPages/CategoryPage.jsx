import React from "react";
import { useParams } from "react-router-dom";

export default function CategoryPage() {
  const { categoryId } = useParams();

  // TODO: fetch/filter products by categoryId

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Category: {categoryId}</h2>
      <p>List of products in the <strong>{categoryId}</strong> category will be shown here.</p>
    </div>
  );
}
