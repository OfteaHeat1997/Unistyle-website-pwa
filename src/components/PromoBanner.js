import React from 'react';
import { Link } from 'react-router-dom';
import './PromoBanner.css';

const PromoBanner = () => {
  return (
    <div className="promo-banner">
      <div className="container">
        <div className="promo-content">
          <Link to="/offers" className="promo-link">
            <span className="promo-icon">🎁</span>
            DISCOVER OUR OFFERS <span className="promo-arrow">&gt;</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;