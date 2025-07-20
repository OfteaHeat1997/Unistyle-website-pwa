import React from 'react';
import { Link } from 'react-router-dom';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-content">
          <h2 className="hero-title">25% OFF <br />everything!</h2>
          <p className="hero-subtitle">Coupon: PRIME</p>
          <Link to="/shop" className="hero-btn">
            GET IT ALL
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;