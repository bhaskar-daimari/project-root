
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItems from './CartItems';
import OrderSummary from './OrderSummary';
import f1 from '../../assets/f1.jpg';

export default function Cart() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Kuromi phonecharm',
      price: 320,
      quantity: 1,
      option: 'Pink',
      image: f1,
    },
    {
      id: 2,
      title: 'Melody bracelet',
      price: 250,
      quantity: 2,
      option: 'Red',
      image: f1,
    }
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = subtotal > 1000 ? 0 : 80;
  const total = subtotal + delivery;

  return (
    <div className="cart-container">
      <div style={{ marginBottom: "1rem" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            background: "none",
            border: "none",
            color: "#555",
            fontSize: "16px",
            cursor: "pointer",
            padding: 0
          }}
        >
          ← Back to Home
        </button>
      </div>

      <h2>My Cart</h2>
      <div className="cart-content">
        <CartItems
          items={cartItems}
          onUpdate={updateQuantity}
          onRemove={removeItem}
        />
        <OrderSummary
          subtotal={subtotal}
          delivery={delivery}
          total={total}
          onCheckout={() => navigate("/checkout")}
        />
      </div>
    </div>
  );
}
