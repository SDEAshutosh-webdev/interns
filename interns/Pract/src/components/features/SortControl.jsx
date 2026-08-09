import React from "react";
import "../../styles/SortControl.css";

const SortControl = ({ sortOption, setSortOption }) => {
  return (
    <select
      className="sort-dropdown"
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
    >
      <option value="default">All Food Items 🍴</option>
      <option value="low-high">Low to High Price ⬆️</option>
      <option value="high-low">High to Low Price ⬇️ </option>
      <option value="rating">Top Rated ⭐</option>
    </select>
  );
};

export default SortControl;