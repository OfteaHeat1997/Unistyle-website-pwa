import React from 'react';
import { Link } from 'react-router-dom';
import './ProductRecommendation.css';

// Import product images
import product1 from '../assets/kolonia.jpg';
import product2 from '../assets/yambal kolonia.jpg';
import product3 from '../assets/lebel new code kolonia.jpg';
import product4 from '../assets/esika.jpg';
import product5 from '../assets/yambal para la cara.jpg';

const ProductRecommendation = () => {
  // Actual product images for the background
  const productImages = [
    product1,
    product2,
    product3,
    product4,
    product5
  ];

  return (
    <section className="recommendation-section">
      <div className="container">
        <div className="recommendation-content">
          <div className="product-images">
            {productImages.map((image, index) => (
              <div className="product-image" key={index}>
                <img src={image} alt={`Product ${index + 1}`} />
              </div>
            ))}
          </div>
          
          <div className="recommendation-text">
            <h2 className="recommendation-title">We'll help you find the perfect piece!</h2>
            <Link to="/quiz" className="recommendation-btn">
              TAKE THE QUIZ
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductRecommendation;