import React, { useState } from 'react';
import './ProductDetails.css'

function ProductDetails({image, name, brand, price}){
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => {
    setQuantity(prev => prev + 1);
  };

  const handleDecrease = () => {
    setQuantity(prev => prev > 1 ? prev - 1 : 1);
  };

  return (
    <div className="product-detail">
      <div className="product-image">
        <img src={image} alt={name} />
      </div>

      <div className="product-info">
        
        <h2>{name}</h2>
        <p className="price">Rs. {price}</p>
        
        <div className="quantity-control">
          <button onClick={handleDecrease}>-</button>
          <input type="number" value={quantity} readOnly />
          <button onClick={handleIncrease}>+</button>
        </div>

        <button className="wishlist-btn">♡ Add to wishlist</button>
        <button className="add-cart-btn">Add to cart</button>
        <button className="buy-now-btn">Buy it now</button>

        
      </div>
    </div>
  );
};

export default ProductDetails;