import { useState, useEffect } from "react";
import FoodCard from "../../components/features/food/FoodCard";
import { foodService } from "../../api/foodService";
import CategoryFilter from "../../components/features/food/CategoryFilter";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import { useFoodItems } from "../../hooks/useFoodItems";
import "../../styles/MenuPage.css";


const CATEGORIES = ["All", "Breakfast", "Main Course", "Snacks", "Italian"];

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [allFoodItems, setAllFoodItems] = useState([]);
  const { foodItems, loading } = useFoodItems(selectedCategory);

  useEffect(() => {
    foodService.getAllFoodItems().then((data) => {
      setAllFoodItems(data);
    });
  }, []);

  // calculate how many items are in the each category
const categoryCounts = {
  All: allFoodItems.length,

  Breakfast: allFoodItems.filter(
    (item) => item.category === "Breakfast"
  ).length,

  "Main Course": allFoodItems.filter(
    (item) => item.category === "Main Course"
  ).length,

  Snacks: allFoodItems.filter(
    (item) => item.category === "Snacks"
  ).length,

  Italian: allFoodItems.filter(
    (item) => item.category === "Italian"
  ).length,
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
    <CategoryFilter
      categories={CATEGORIES}
      selectedCategory={selectedCategory}
      onCategoryChange={setSelectedCategory}
      categoryCounts={categoryCounts}
    />

      {/* Food Items Grid */}
      <div className="menu-container">
        {loading ? (
          <div className="loading">Loading delicious items...</div>
        ) : filteredItems.length > 0 ? (
          <div className="products-grid">
            {filteredItems.map((item) => (
              <FoodCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="empty-menu">
            <p>No food items match your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default MenuPage;
