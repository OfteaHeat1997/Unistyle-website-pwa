import React from 'react';
import Header from '../components/Header';
import NotificationBar from '../components/NotificationBar';
import PromoBanner from '../components/PromoBanner';
import HeroSection from '../components/HeroSection';
import CategoryGrid from '../components/CategoryGrid';
import ProductRecommendation from '../components/ProductRecommendation';
// Temporarily disabled: import NotificationSubscription from '../components/NotificationSubscription';
import CookieConsent from '../components/CookieConsent';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <NotificationBar />
      <Header />
      <PromoBanner />
      <HeroSection />
      <CategoryGrid />
      <ProductRecommendation />
      {/* Temporarily disabled: <NotificationSubscription /> */}
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default HomePage;