
// CartItems.jsx
import React from 'react';
import './Cart.css';

export default function CartItems({ items, onUpdate, onRemove }) {
  return (
    <div className="cart-items">
      {items.map(item => (
        <div key={item.id} className="item-card">
          <img src={item.image} alt={item.title} className="product-image" />
          <div className="item-details">
            <p className="title">{item.title}</p>
            <p>₹{item.price.toFixed(2)}</p>
            {item.option && <p>Option: {item.option}</p>}
            <div className="quantity">
              <button onClick={() => onUpdate(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onUpdate(item.id, 1)}>+</button>
            </div>
          </div>
          <div className="price">₹{(item.price * item.quantity).toFixed(2)}</div>
          <button className="delete" onClick={() => onRemove(item.id)}>🗑</button>
        </div>
      ))}
      <a href="#" className="note-link">Add a note</a>
    </div>
  );
}
