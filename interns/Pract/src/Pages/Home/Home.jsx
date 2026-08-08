import React from "react";
import PromoBanner from "../../components/features/food/offers/PromoBanner";
import "./Home.css";

function Home() {
  return (
    <div className="home-page" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Food Ordering App</h1>

      {/* 🎯 Intern 9 Task Output */}
      <PromoBanner />

    </div>
  );
}

export default Home;