
import React from "react";

export default function OrderSummary({ subtotal, delivery, total, onCheckout }) {
  return (
    <div className="order-summary">
      <h3>Order Summary</h3>
      <p>Subtotal: ₹{subtotal}</p>
      <p>Delivery: ₹{delivery}</p>
      <hr />
      <p><strong>Total: ₹{total}</strong></p>

      <button
        onClick={onCheckout}
        style={{
          marginTop: "1rem",
          backgroundColor: "#d36f9d",
          color: "#fff",
          padding: "12px 24px",
          border: "none",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Proceed to Checkout
      </button>

      <p style={{ marginTop: "10px", fontSize: "0.9rem", color: "#777" }}>
        100% secure payment
      </p>
    </div>
  );
}
