import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryGrid.css';

// Import images
import girdlesImage from '../assets/pantys.jpg';
import lingerieImage from '../assets/bra altp cubrimiento.jpg';
import swimwearImage from '../assets/pantys2.jpg';
import onSaleImage from '../assets/pantys3.jpg';
import bodysuitsImage from '../assets/renchi.jpg';
import backSupportImage from '../assets/boxer.jpg';
import activewearImage from '../assets/jeans.jpg';
import leggingsImage from '../assets/tas.jpg';

const CategoryGrid = () => {
  // Category data with actual images
  const categories = [
    {
      id: 1,
      name: 'Girdles',
      image: girdlesImage,
      link: '/category/girdles'
    },
    {
      id: 2,
      name: 'Lingerie',
      image: lingerieImage,
      link: '/category/lingerie'
    },
    {
      id: 3,
      name: 'Swimwear',
      image: swimwearImage,
      link: '/category/swimwear'
    },
    {
      id: 4,
      name: 'On sale',
      image: onSaleImage,
      link: '/sale'
    },
    {
      id: 5,
      name: 'bodysuits',
      image: bodysuitsImage,
      link: '/category/bodysuits'
    },
    {
      id: 6,
      name: 'Back Support',
      image: backSupportImage,
      link: '/category/back-support'
    },
    {
      id: 7,
      name: 'Activewear',
      image: activewearImage,
      link: '/category/activewear'
    },
    {
      id: 8,
      name: 'Leggings',
      image: leggingsImage,
      link: '/category/leggings'
    }
  ];

  return (
    <section className="category-section">
      <div className="container">
        <h2 className="section-title">Shop by category</h2>
        <div className="category-grid">
          {categories.map(category => (
            <Link to={category.link} key={category.id} className="category-item">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
              </div>
              <div className="category-overlay">
                <h3 className="category-name">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;