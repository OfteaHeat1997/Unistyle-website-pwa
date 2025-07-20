import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAccepted = localStorage.getItem('cookieConsent');
    
    if (!hasAccepted) {
      // Show cookie consent popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1500);
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handlePreferences = () => {
    // This would typically open a more detailed cookie preferences modal
    // For now, we'll just log a message
    console.log('Cookie preferences clicked');
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
        </div>
        <p className="cookie-text">
          Unistyles uses cookies to ensure you get the best experience. <a href="/privacy" className="cookie-link">Learn more</a>
        </p>
        <div className="cookie-buttons">
          <button className="btn btn-secondary cookie-btn" onClick={handlePreferences}>
            Preferences
          </button>
          <button className="btn btn-primary cookie-btn" onClick={handleAccept}>
            Got it!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;