import "../../../styles/CategoryFilter.css";


const CATEGORY_ICONS = {
  All: "🍽️",
  Breakfast: "🥞",
  "Main Course": "🍛",
  Snacks: "🍿",
  Italian: "🍕",
};

function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  categoryCounts,
}) {
  console.log("CategoryFilter props:", {
    categories,
    selectedCategory,
    onCategoryChange,
    categoryCounts,
  });

  return (
    <div className="category-pills">
      {categories.map((cat) => (
       <button
  key={cat}
  className={`pill ${
    selectedCategory === cat ? "active" : ""
  }`}
  onClick={() => onCategoryChange(cat)}
>
  {CATEGORY_ICONS[cat]} {cat}

  <span className="category-count">
    {categoryCounts[cat]}
  </span>
</button>
      ))}
    </div>
  );
}

export default CategoryFilter;