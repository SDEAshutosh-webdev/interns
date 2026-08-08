import { useState } from "react";
import FoodCard from "../../components/features/food/FoodCard";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import { useFoodItems } from "../../hooks/useFoodItems";
import "../../styles/MenuPage.css";
import FoodDetailsModal from "../../components/features/food/FoodDetailsModal";

const CATEGORIES = ["All", "Breakfast", "Main Course", "Snacks", "Italian"];

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const { foodItems, loading } = useFoodItems(selectedCategory);
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
    <div className="menu-page">
      <div className="menu-header">
        <h1>Explore Our Food Menu</h1>
        <p>Order fresh, tasty food crafted by master chefs.</p>
        <div className="menu-search">
          <SearchBar search={search} setSearch={setSearch} placeholder="Search by name or ingredient..." />
        </div>
      </div>

      {/* Category Pills */}
      <div className="category-pills">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`pill ${selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Food Items Grid */}
      <div className="menu-container">
        {loading ? (
          <div className="loading">Loading delicious items...</div>
        ) : filteredItems.length > 0 ? (
          <div className="products-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} isOpen={()=>handleOpen(item)} />
            ))}
          </div>
        ) : (
          <div className="empty-menu">
            <p>No food items match your criteria.</p>
          </div>
        )}
      </div>

      {selectedItem && (
        <FoodDetailsModal item={selectedItem} closePopup={closePopup} />
      )}
    </div>
  );
}

export default MenuPage;
