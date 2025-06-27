import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ image, tittle, price, onWishlistToggle, link }) {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleWishlistClick = () => {
    const newWishlistState = !isWishlisted;
    setIsWishlisted(newWishlistState);

    if (onWishlistToggle) {
      onWishlistToggle({
        image,
        tittle,
        price,
        isWishlisted: newWishlistState,
      });
    }
  };

  return (
    <div className='card'>
      <img className="img" src={image} alt={tittle} />
      <h2 className="tittle">{tittle}</h2>
      <p className='info'> Rs {price}</p>
      <div className='button-container'>
        {/* Wrap View button in Link to navigate */}
        <Link to={link} className='button view-button'>
          View
        </Link>

        <button
          className={`wishlist-button ${isWishlisted ? 'wishlisted' : ''}`}
          onClick={handleWishlistClick}
          title={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isWishlisted ? '❤️' : '🤍'}
        </button>
      </div>
    </div>
  );
}

export default Card;
