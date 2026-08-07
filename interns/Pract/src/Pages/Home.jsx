import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Common/SearchBar";
import ProductCard from "../Common/ProductCard";
import Button from "../Common/Button";
import "./Home.css";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const featuredProducts = [
    {
      id: 1,
      image: "/images/poha.jpg",
      title: "Maharashtrian Poha",
      description: "Fresh, hot and healthy breakfast made with flattened rice, roasted peanuts, mustard seeds, and fresh curry leaves.",
      price: 80,
    },
    {
      id: 2,
      image: "/images/biryani.jpg",
      title: "Special Dum Biryani",
      description: "Aromatic basmati rice cooked to perfection with rich authentic spices, saffron, and garden fresh vegetables.",
      price: 180,
    },
    {
      id: 3,
      image: "/images/paneer.jpg",
      title: "Shahi Paneer Curry",
      description: "Soft fresh paneer cubes simmered in a rich, buttery cashew tomato gravy with aromatic spices.",
      price: 220,
    },
  ];

  const filteredProducts = featuredProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(search.toLowerCase()) ||
      product.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">🔥 Fresh & Fast Delivery</span>
          <h1 className="hero-title">
            Delicious Food Delivered Right To Your Doorstep
          </h1>
          <p className="hero-subtitle">
            Explore our curated menu of authentic, handcrafted recipes made with fresh ingredients every day.
          </p>

          <div className="hero-search-wrapper">
            <SearchBar search={search} setSearch={setSearch} />
          </div>

          <div className="hero-actions">
            <Button
              text="Explore All Products"
              variant="primary"
              onClick={() => navigate("/products")}
            />
            <Button
              text="Contact Us"
              variant="outline"
              onClick={() => navigate("/contact")}
            />
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Featured Delicacies</h2>
          <p>Handpicked favorites loved by hundreds of food lovers</p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                image={product.image}
                title={product.title}
                description={product.description}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No dishes found matching "{search}"</p>
            <Button
              text="Clear Search"
              variant="secondary"
              onClick={() => setSearch("")}
            />
          </div>
        )}
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Have Questions or Special Requests?</h2>
          <p>Get in touch with our team for bulk orders, feedback, or catering services.</p>
          <Button
            text="Get In Touch"
            variant="success"
            onClick={() => navigate("/contact")}
          />
        </div>
      </section>
    </div>
  );
}

export default Home;