import React, { useEffect, useState } from "react";

const BACKEND_URL = "http://localhost:5000";

export default function ManageProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ title: "", price: "" });
  const [error, setError] = useState(null);

  const token = localStorage.getItem("token");

  // Fetch all products from backend
  const fetchProducts = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/products`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to fetch products");
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // Add a new product
  const handleAddProduct = async () => {
    if (!newProduct.title || !newProduct.price) {
      setError("Please fill both title and price.");
      return;
    }
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...newProduct,
          price: Number(newProduct.price),
        }),
      });
      if (!res.ok) throw new Error("Failed to add product");
      setNewProduct({ title: "", price: "" });
      fetchProducts();
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete a product by ID
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${BACKEND_URL}/api/admin/products/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!res.ok) throw new Error("Failed to delete product");
      fetchProducts();
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h3>Manage Products</h3>
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      <input
        placeholder="Title"
        value={newProduct.title}
        onChange={(e) =>
          setNewProduct({ ...newProduct, title: e.target.value })
        }
      />
      <input
        placeholder="Price"
        type="number"
        value={newProduct.price}
        onChange={(e) =>
          setNewProduct({ ...newProduct, price: e.target.value })
        }
      />
      <button onClick={handleAddProduct}>Add Product</button>

      <ul>
        {products.map((p) => (
          <li key={p._id}>
            {p.title} - ₹{p.price}
            <button
              onClick={() => handleDelete(p._id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
