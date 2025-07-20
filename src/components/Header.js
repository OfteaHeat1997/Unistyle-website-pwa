import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content flex-between">
          {/* Mobile menu button */}
          <button 
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          {/* Search icon */}
          <div className="search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          
          {/* Logo */}
          <div className="logo">
            <Link to="/">
              <h1>Unistyles</h1>
            </Link>
          </div>
          
          {/* User and cart icons */}
          <div className="header-icons">
            {/* User account icon */}
            <Link to="/account" className="account-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            
            {/* Shopping cart icon */}
            <Link to="/cart" className="cart-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <ul>
              <li><Link to="/category/girdles">Girdles</Link></li>
              <li><Link to="/category/lingerie">Lingerie</Link></li>
              <li><Link to="/category/swimwear">Swimwear</Link></li>
              <li><Link to="/category/bodysuits">Bodysuits</Link></li>
              <li><Link to="/category/back-support">Back Support</Link></li>
              <li><Link to="/category/activewear">Activewear</Link></li>
              <li><Link to="/category/leggings">Leggings</Link></li>
              <li><Link to="/sale">On Sale</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;