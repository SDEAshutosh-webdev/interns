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
    <div className="home-page" style={{ padding: "20px", textAlign: "center" }}>
      <h1>Welcome to Food Ordering App</h1>

      {loading ? (
        <div className="loading-spinner">Loading delicious items...</div>
      ) : filteredItems.length > 0 ? (
        <div className="products-grid">
          {filteredItems.map((item) => (
            <FoodCard
              key={item.id}
              item={item}
              isOpen={() => handleOpen(item)}
            />
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No dishes found matching "{search}"</p>
          <Button
            text="Reset Search"
            variant="secondary"
            onClick={() => setSearch("")}
          />
        </div>
      )}

      {/* Call To Action Banner */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>Hungry? Order your favorite meal today!</h2>
          <p>
            Get instant discounts and fast 30-minute delivery to your doorstep.
          </p>
          <Button
            text="Order Now"
            variant="success"
            onClick={() => navigate("/menu")}
          />
        </div>
      </section>

      {selectedItem && (
        <FoodDetailsModal
          item={selectedItem}
          closePopup={closePopup}
        />
      )}
    </div>
  );
}

export default Home;