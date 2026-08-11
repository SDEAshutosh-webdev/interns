import React, { useState, useEffect } from "react";
import "../../../../styles/PromoBanner.css"; 

const promoBanners = [
  {
    id: 1,
    title: "🔥 50% OFF on First 3 Orders!",
    code: "FIRST50",
    subtitle: "Delicious meals delivered right to your door",
    background: "linear-gradient(135deg, #ff7e5f, #feb47b)",
  },
  {
    id: 2,
    title: "🚚 Free Delivery on Orders Above ₹200!",
    code: "FREEDEL",
    subtitle: "No extra charges, instant delivery guaranteed",
    background: "linear-gradient(135deg, #11998e, #38ef7d)",
  },
  {
    id: 3,
    title: "🎉 Weekend Special Cashback Coupon!",
    code: "WEEKEND20",
    subtitle: "Get up to ₹100 cashback on all starters",
    background: "linear-gradient(135deg, #8e2de2, #4a00e0)",
  },
];

const PromoBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide after every 3.5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % promoBanners.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % promoBanners.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? promoBanners.length - 1 : prevIndex - 1
    );
  };

  const currentBanner = promoBanners[currentIndex];

  return (
    <div
      className="promo-banner-card"
      style={{ background: currentBanner.background }}
    >
      <button className="slider-btn prev-btn" onClick={prevSlide} aria-label="Previous Banner">
        ❮
      </button>

      <div className="promo-content">
        <h2>{currentBanner.title}</h2>
        <p>{currentBanner.subtitle}</p>
        <div className="promo-code-box">
          Use Code: <span>{currentBanner.code}</span>
        </div>
      </div>

      <button className="slider-btn next-btn" onClick={nextSlide} aria-label="Next Banner">
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="dots-container">
        {promoBanners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PromoBanner;