import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import Button from "../../components/common/Button/Button";
import FoodCard from "../../components/features/food/FoodCard";
import { useFoodItems } from "../../hooks/useFoodItems";
import "../../styles/Home.css";
import FoodDetailsModal from "../../components/features/food/FoodDetailsModal";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { foodItems, loading } = useFoodItems("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOpen = (item) => {
  setSelectedItem(item);
  };

  const closePopup = () => {
    setSelectedItem(null);
  };
  

  const filteredItems = foodItems.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">🔥 Lightning Fast Food Delivery</span>
          <h1 className="hero-title">
            Delicious Meals Delivered Right To Your Doorstep
          </h1>
          <p className="hero-subtitle">
            Explore hundreds of handcrafted recipes made with fresh, organic ingredients every single day.
          </p>

          <div className="hero-search-wrapper">
            <SearchBar search={search} setSearch={setSearch} placeholder="Search Poha, Biryani, Pizza..." />
          </div>

          <div className="hero-actions">
            <Button text="Browse Full Menu" variant="primary" onClick={() => navigate("/menu")} />
            <Button text="Contact Support" variant="outline" onClick={() => navigate("/contact")} />
          </div>
        </div>
      </section>

      {/* Featured Food Items Section */}
      <section className="products-section">
        <div className="section-header">
          <h2>Featured Menu Delicacies</h2>
          <p>Handpicked favorites loved by food lovers across the city</p>
        </div>

        {loading ? (
          <div className="loading-spinner">Loading delicious items...</div>
        ) : filteredItems.length > 0 ? (
          <div className="products-grid">
            {filteredItems.map((item) => (
             <FoodCard key={item.id} item={item} isOpen={() =>handleOpen(item)}/>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No dishes found matching "{search}"</p>
            <Button text="Reset Search" variant="secondary" onClick={() => setSearch("")} />
          </div>
        )}
      </section>

      {/* Call To Action Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Hungry? Order your favorite meal today!</h2>
          <p>Get instant discounts and fast 30-minute delivery to your doorstep.</p>
          <Button text="Order Now" variant="success" onClick={() => navigate("/menu")} />
        </div>
      </section>
       {selectedItem && (
        <FoodDetailsModal item={selectedItem} closePopup={closePopup} />
      )}
    </div>
  );
}

export default Home;
