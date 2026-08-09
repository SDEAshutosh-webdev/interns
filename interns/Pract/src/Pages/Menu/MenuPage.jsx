import { useState } from "react";

import FoodCard from "../../components/features/food/FoodCard";
import SearchBar from "../../components/common/SearchBar/SearchBar";
import SortControl from "../../components/features/SortControl";

import { useFoodItems } from "../../hooks/useFoodItems";

import "../../styles/MenuPage.css";

const CATEGORIES = [
  "All",
  "Breakfast",
  "Main Course",
  "Snacks",
  "Italian",
];

function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const { foodItems, loading } =
    useFoodItems(selectedCategory);

  // =========================
  // SEARCH FILTERING
  // =========================

  const filteredItems = foodItems.filter(
    (item) =>
      item.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      item.description
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  // =========================
  // COPY BEFORE SORTING
  // =========================

  const sortedItems = [...filteredItems];

  // =========================
  // SORTING
  // =========================

  if (sortOption === "low-high") {
    sortedItems.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sortOption === "high-low") {
    sortedItems.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sortOption === "rating") {
    sortedItems.sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <div className="menu-page">

      {/* ========================= */}
      {/* MENU HEADER */}
      {/* ========================= */}

      <div className="menu-header">

        <h1>
          Explore Our Food Menu
        </h1>

        <p>
          Order fresh, tasty food crafted by master chefs.
        </p>

        <div className="menu-search">
          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

      </div>


      {/* ========================= */}
      {/* CATEGORY PILLS */}
      {/* ========================= */}

      <div className="category-pills">

        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            className={`pill ${
              selectedCategory === cat
                ? "active"
                : ""
            }`}
            onClick={() =>
              setSelectedCategory(cat)
            }
          >
            {cat}
          </button>
        ))}

      </div>


      {/* ========================= */}
      {/* SORT DROPDOWN */}
      {/* ========================= */}

      <div className="sort-wrapper">

        <SortControl
          sortOption={sortOption}
          setSortOption={setSortOption}
        />

      </div>


      {/* ========================= */}
      {/* FOOD ITEMS */}
      {/* ========================= */}

      <div className="menu-container">

        {loading ? (

          <div className="loading">
            Loading delicious items...
          </div>

        ) : sortedItems.length > 0 ? (

          <div className="products-grid">

            {sortedItems.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
              />
            ))}

          </div>

        ) : (

          <div className="empty-menu">
            <p>
              No food items match your criteria.
            </p>
          </div>

        )}

      </div>

    </div>
  );
}

export default MenuPage;